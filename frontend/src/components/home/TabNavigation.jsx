import React from "react";
import { Box, Button, useTheme } from "@mui/material";
import WalletIcon from "@mui/icons-material/Wallet";

const TabNavigation = ({
  setConnected,
  activeTab,
  setActiveTab,
  setSearchTerm,
}) => {
  const theme = useTheme();

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
        Explore
      </Button>

      <Button
        onClick={() => setActiveTab("search")}
        variant={activeTab === "search" ? "contained" : "outlined"}
        disableElevation
        sx={btnStyle(activeTab === "search")}
      >
        Search
      </Button>

      <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          onClick={() => setConnected(true)}
          variant="contained"
          disableElevation
          sx={{ ...btnStyle(true), gap: 1, p: 1.5 }}
        >
          <WalletIcon sx={{ width: 16, height: 16 }} />
          Connect Wallet
        </Button>
      </Box>
    </Box>
  );
};

export default TabNavigation;
