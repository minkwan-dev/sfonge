import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

const Header = () => {
  const navItems = [{ label: "프로젝트 소개", id: "about" }];

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
      }}
    >
      <Box
        disableGutters
        sx={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "16px",
              transform: "rotate(45deg)",
              boxShadow: 3,
              background:
                "linear-gradient(to bottom right, #212121, #424242, #616161)",
            }}
          >
            <WaterDropIcon
              sx={{
                width: 20,
                height: 20,
                color: "white",
                transform: "rotate(-45deg)",
              }}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "black", fontSize: "1.5rem" }}
          >
            Sfonge
          </Typography>
        </Box>

        {/* Navigation */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          {navItems.map((item) => (
            <Button
              key={item.id}
              sx={{
                color: "grey.700",
                fontWeight: "medium",
                textTransform: "none",
                "&:hover": { color: "black", backgroundColor: "transparent" },
              }}
            >
              {item.label}
            </Button>
          ))}
          <Button
            href="/app"
            variant="contained"
            disableElevation
            sx={{
              paddingX: 2.5,
              paddingY: 1.25,
              borderRadius: "12px",
              fontWeight: "medium",
              textTransform: "none",
              background: "linear-gradient(to right, #212121, #424242)",
              "&:hover": {
                boxShadow: 5,
                transform: "scale(1.05)",
                transition: "all 0.2s",
              },
            }}
          >
            시작하기
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
