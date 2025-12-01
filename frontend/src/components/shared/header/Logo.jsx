import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

const Logo = () => {
  const navigate = useNavigate();

  const goLanding = () => {
    navigate("/");
  };

  return (
    <Box
      onClick={goLanding}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        cursor: "pointer",
      }}
    >
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
  );
};

export default Logo;
