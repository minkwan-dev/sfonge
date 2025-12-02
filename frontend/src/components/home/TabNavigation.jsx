import React, { useState } from "react";
import { Box, Button, useTheme } from "@mui/material";
import WalletIcon from "@mui/icons-material/Wallet";
import { connectWallet } from "../../utils/web3";
import { useNavigate } from "react-router-dom";

const TabNavigation = ({
  connected,
  setConnected,
  activeTab,
  setActiveTab,
  setSearchTerm,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [walletAddress, setWalletAddress] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);

  const btnStyle = (active) => ({
    px: 3,
    py: 1.5,
    borderRadius: "12px",
    fontWeight: "medium",
    textTransform: "none",
    transition: "all 0.2s",
    ...(active
      ? {
          background: "linear-gradient(to right, #212121, #424242)",
          color: "white",
          boxShadow: theme.shadows[4],
        }
      : {
          color: "grey.600",
          borderColor: "grey.200",
          "&:hover": { bgcolor: "grey.50", borderColor: "grey.300" },
        }),
  });

  const handleConnectWallet = async () => {
    setIsConnecting(true);
    try {
      const address = await connectWallet();
      setWalletAddress(address);
      setConnected(true);
    } catch (error) {
      alert(error.message || "지갑 연결에 실패했습니다.");
    } finally {
      setIsConnecting(false);
    }
  };

  const formatAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const handleCreateProject = () => {
    navigate("/create-project");
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 5 }}>
      <Button
        onClick={() => {
          setActiveTab("explore");
          setSearchTerm("");
        }}
        variant={activeTab === "explore" ? "contained" : "outlined"}
        disableElevation
        sx={btnStyle(activeTab === "explore")}
      >
        탐색 모드
      </Button>
      <Button
        onClick={() => setActiveTab("search")}
        variant={activeTab === "search" ? "contained" : "outlined"}
        disableElevation
        sx={btnStyle(activeTab === "search")}
      >
        검색 모드
      </Button>

      <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 2 }}>
        {!connected ? (
          <Button
            onClick={handleConnectWallet}
            variant="contained"
            disableElevation
            disabled={isConnecting}
            sx={{ ...btnStyle(true), gap: 1, p: 1.5 }}
          >
            <WalletIcon sx={{ width: 16, height: 16 }} />
            {isConnecting ? "연결 중..." : "지갑 연결하기"}
          </Button>
        ) : (
          <>
            <Button
              variant="contained"
              sx={{ ...btnStyle(true), gap: 1, p: 1.5 }}
            >
              <WalletIcon sx={{ width: 16, height: 16 }} />
              {formatAddress(walletAddress)}
            </Button>

            <Button
              onClick={handleCreateProject}
              variant="outlined"
              sx={{ ...btnStyle(false) }}
            >
              프로젝트 생성하기
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default TabNavigation;
