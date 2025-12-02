import { ethers } from "ethers";
import { getContract } from "./web3";

export const createProject = async (goalAmount, durationInDays) => {
  const contract = await getContract();
  const goalInWei = ethers.parseEther(goalAmount.toString());
  const durationInSeconds = durationInDays * 24 * 60 * 60;

  const tx = await contract.createProject(goalInWei, durationInSeconds);
  await tx.wait();

  return tx;
};

export const investInProject = async (projectId, amount) => {
  const contract = await getContract();
  const amountInWei = ethers.parseEther(amount.toString());

  const tx = await contract.invest(projectId, {
    value: amountInWei,
  });

  await tx.wait();
  return tx;
};

export const getProjectInfo = async (projectId) => {
  const contract = await getContract();
  const project = await contract.projects(projectId);

  return {
    id: projectId,
    owner: project.owner,
    goalAmount: ethers.formatEther(project.goalAmount),
    raisedAmount: ethers.formatEther(project.currentRaisedAmount),
    deadline: Number(project.deadline),
    state: Number(project.currentState),
    investorCount: Number(project.investorCount),
    progress:
      (Number(project.currentRaisedAmount) / Number(project.goalAmount)) * 100,
  };
};

export const getAllProjects = async () => {
  const contract = await getContract();
  const count = Number(await contract.projectCount());
  const projects = [];

  for (let i = 0; i < count; i++) {
    const project = await getProjectInfo(i);
    projects.push(project);
  }

  return projects;
};
