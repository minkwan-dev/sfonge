require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const DEFAULT_COMPILER_SETTINGS = {
  version: "0.8.28",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};

module.exports = {
  solidity: DEFAULT_COMPILER_SETTINGS,

  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
    monad: {
      url: process.env.MONAD_RPC_URL || "",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 10143,
    },
  },
};
