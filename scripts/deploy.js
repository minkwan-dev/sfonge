const { ethers } = require("ethers");
const hre = require("hardhat");

async function main() {
  const artifacts = await hre.artifacts.readArtifact("Crowdfunding");
  const abi = artifacts.abi;
  const bytecode = artifacts.bytecode;

  const [deployer] = await hre.ethers.getSigners();
  const balance = await hre.ethers.provider.getBalance(deployer.address);

  const factory = new ethers.ContractFactory(abi, bytecode, deployer);
  const crowdfunding = await factory.deploy();
  await crowdfunding.waitForDeployment();
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
