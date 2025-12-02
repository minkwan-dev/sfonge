const { ethers } = require("ethers");
const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  const artifacts = await hre.artifacts.readArtifact("Crowdfunding");
  const abi = artifacts.abi;
  const bytecode = artifacts.bytecode;

  const [deployer] = await hre.ethers.getSigners();
  const balance = await hre.ethers.provider.getBalance(deployer.address);

  const factory = new ethers.ContractFactory(abi, bytecode, deployer);
  const crowdfunding = await factory.deploy();
  await crowdfunding.waitForDeployment();

  const contractData = {
    address: crowdfunding.target,
    abi: abi,
  };

  const frontendPath = path.join(__dirname, "../frontend/src/utils");
  if (!fs.existsSync(frontendPath)) {
    fs.mkdirSync(frontendPath, { recursive: true });
  }

  fs.writeFileSync(
    path.join(frontendPath, "contract.json"),
    JSON.stringify(contractData, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
