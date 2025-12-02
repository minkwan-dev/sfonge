import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { AppBar, Button, Box, Menu, MenuItem, Typography } from "@mui/material";
import { useAtom } from "jotai/react";
import WalletIcon from "@mui/icons-material/Wallet";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import { Logo, Navigation } from "./index";
import { isConnectedAtom, accountAtom } from "../../../store/walletAtom";
import { connectWallet } from "../../../utils/web3";

const Header = () => {
  const [isConnected, setIsConnected] = useAtom(isConnectedAtom);
  const [account, setAccount] = useAtom(accountAtom);
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    if (isConnected) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleConnect = async () => {
    try {
      const address = await connectWallet();
      setAccount(address);
      setIsConnected(true);
    } catch (error) {
      console.error("Connection error:", error);
      alert(error.message || "지갑 연결 중 오류가 발생했습니다.");
    }
  };

  const handleDisconnect = () => {
    setAccount(null);
    setIsConnected(false);
    handleMenuClose();
  };

  const accountDisplay = account
    ? `${account.slice(0, 6)}...${account.slice(-4)}`
    : "";

  const baseButtonStyle = {
    borderRadius: "12px",
    fontWeight: "semibold",
    textTransform: "none",
    color: "white",
    py: 1,
    px: 2,
    gap: 1,
  };

  const connectStyle = {
    ...baseButtonStyle,
    background: "linear-gradient(to right, #212121, #424242)",
    "&:hover": {
      background: "linear-gradient(to right, #424242, #616161)",
    },
  };

  const connectedStyle = {
    ...baseButtonStyle,
    background: "linear-gradient(to right, #1a1a1a, #333333)",
    "&:hover": {
      background: "linear-gradient(to right, #333333, #4f4f4f)",
    },
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        minHeight: "80px",
        backgroundColor: "#ffffff",
        borderBottom: 1,
        borderColor: "grey.200",
        boxShadow: "none",
        zIndex: 999,
        justifyContent: "center",
        px: { xs: 3, sm: 2, md: 1 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo />

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {!isHomePage && <Navigation />}

          {isConnected ? (
            <Button
              variant="contained"
              onClick={handleMenuClick}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={connectedStyle}
            >
              <WalletIcon sx={{ width: 16, height: 16 }} />
              {accountDisplay}
              <KeyboardArrowDownIcon sx={{ width: 16, height: 16 }} />
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleConnect}
              sx={connectStyle}
            >
              <WalletIcon sx={{ width: 16, height: 16 }} />
              지갑 연결하기
            </Button>
          )}

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleMenuClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleDisconnect}>
              <LogoutIcon sx={{ mr: 1, color: "grey.700" }} />
              <Typography variant="body2" color="grey.700">
                지갑 해제하기
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
