import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useGoHome } from "./hooks/useGoHome";

const CtaSection = () => {
  const goHome = useGoHome();
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 16 }, px: 3 }}>
      <Box sx={{ maxWidth: "896px", mx: "auto", textAlign: "center" }}>
        <Box
          sx={{
            background: "linear-gradient(to bottom right, #212121, #424242)",
            borderRadius: "24px",
            p: { xs: 6, sm: 8 },
            boxShadow: 24,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.25rem", md: "3rem" },
              fontWeight: "bold",
              color: "white",
              mb: 3,
            }}
          >
            지금 바로 시작하세요
          </Typography>
          <Typography
            sx={{
              fontSize: "1.25rem",
              color: "grey.300",
              mb: 4,
            }}
          >
            혁신적인 아이디어와 투자자를 연결하는 새로운 방법
          </Typography>
          <Button
            onClick={goHome}
            disableElevation
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 4,
              py: 2,
              bgcolor: "white",
              color: "grey.900",
              borderRadius: "12px",
              fontWeight: "semibold",
              textTransform: "none",
              fontSize: "1rem",
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                transform: "scale(1.05)",
                bgcolor: "white",
              },
            }}
          >
            Sfonge 시작하기
            <ArrowForwardIcon sx={{ width: 20, height: 20 }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CtaSection;
