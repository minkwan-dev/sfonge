import { ethers } from "ethers";
import contractData from "./contract.json";

const MONAD_TESTNET = {
  chainId: "0x279F",
  chainName: "Monad Testnet",
  nativeCurrency: {
    name: "MON",
    symbol: "MON",
    decimals: 18,
  },
  rpcUrls: ["https://testnet-rpc.monad.xyz"],
  blockExplorerUrls: ["https://testnet.monad.xyz"],
};

// MetaMask 연결
export const connectWallet = async () => {
  if (!window.ethereum) {
    throw new Error("MetaMask가 설치되어 있지 않습니다!");
  }

  try {
    await window.ethereum.request({
      method: "wallet_requestPermissions",
      params: [{ eth_accounts: {} }],
    });

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    await switchToMonadTestnet();

    return accounts[0];
  } catch (error) {
    console.error("지갑 연결 실패:", error);
    throw error;
  }
};

// Monad 테스트넷으로 네트워크 전환
export const switchToMonadTestnet = async () => {
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: MONAD_TESTNET.chainId }],
    });
  } catch (error) {
    if (error.code === 4902) {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [MONAD_TESTNET],
      });
    } else {
      throw error;
    }
  }
};

// Provider와 Signer 가져오기
export const getProviderAndSigner = () => {
  if (!window.ethereum) {
    throw new Error("MetaMask가 설치되어 있지 않습니다!");
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  return provider;
};

// 컨트랙트 인스턴스 가져오기
export const getContract = async () => {
  const provider = await getProviderAndSigner();
  const signer = await provider.getSigner();

  const contract = new ethers.Contract(
    contractData.address,
    contractData.abi,
    signer
  );

  return contract;
};

// 현재 연결된 지갑 주소 가져오기
export const getCurrentAccount = async () => {
  if (!window.ethereum) return null;

  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });

  return accounts[0] || null;
};
