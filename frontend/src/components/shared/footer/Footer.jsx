import React from "react";
import { Box, Typography } from "@mui/material";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 8, md: 12 },
        px: 3,
        borderTop: 1,
        borderColor: "grey.200",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            gap: 3,
            textAlign: { xs: "center", md: "left" },
          }}
        >
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
            <Box>
              <Typography
                variant="h3"
                sx={{ fontSize: "1.25rem", fontWeight: "bold", color: "black" }}
              >
                Sfonge
              </Typography>
              <Typography sx={{ fontSize: "0.75rem", color: "grey.500" }}>
                Decentralized Crowdfunding
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              textAlign: { xs: "center", md: "right" },
            }}
          >
            <Typography sx={{ fontSize: "0.875rem", color: "grey.600", mb: 1 }}>
              Built on Monad Testnet • Powered by Smart Contracts
            </Typography>
            <Typography sx={{ fontSize: "0.75rem", color: "grey.500" }}>
              © 2024 Sfonge. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
