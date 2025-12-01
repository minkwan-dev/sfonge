import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { keyframes } from "@emotion/react";
import { useGoHome } from "./hooks/useGoHome";

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

const HeroSection = () => {
  const goHome = useGoHome();
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: "8rem", sm: "10rem" },
        pb: { xs: "5rem", sm: "7.5rem" },
        px: 3,
        minHeight: "70vh",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Box sx={{ maxWidth: "896px", mx: "auto", textAlign: "center" }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 1,
              bgcolor: "grey.100",
              borderRadius: "9999px",
              mb: 4,
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                bgcolor: "success.main",
                borderRadius: "50%",
                animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
              }}
            />
            <Typography
              variant="body2"
              sx={{ fontWeight: "medium", color: "grey.700" }}
            >
              Monad Testnet에서 운영 중
            </Typography>
          </Box>

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
              fontWeight: "bold",
              color: "text.primary",
              mb: 3,
              lineHeight: 1.2,
            }}
          >
            스타트업의 꿈을
            <br />
            <Box
              component="span"
              sx={{
                background: "linear-gradient(to right, #212121, #424242)", //
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              블록체인으로 실현하다
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: "1.25rem",
              color: "grey.600",
              mb: 6,
              lineHeight: 1.6,
            }}
          >
            Sfonge는 스펀지가 물을 흡수하듯, 혁신적인 스타트업을 위한 자금을
            모읍니다.
            <br />
            탈중앙화된 크라우드펀딩으로 투명하고 안전한 투자를 경험하세요.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              justifyContent: "center",
            }}
          >
            <Button
              onClick={goHome}
              variant="contained"
              disableElevation
              sx={{
                px: 4,
                py: 2,
                borderRadius: "12px",
                fontWeight: "semibold",
                textTransform: "none",
                fontSize: "1rem",
                background: "linear-gradient(to right, #1f2937, #4b5563)",
                "&:hover": {
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transform: "scale(1.05)",
                  transition: "all 0.2s ease-in-out",
                  background: "linear-gradient(to right, #1f2937, #4b5563)",
                },
              }}
            >
              지금 시작하기
              <ArrowForwardIcon
                sx={{
                  ml: 1,
                  width: 20,
                  height: 20,
                  transition: "transform 0.2s",
                  ".MuiButton-root:hover &": {
                    transform: "translateX(4px)",
                  },
                }}
              />
            </Button>

            <Button
              onClick={goHome}
              variant="outlined"
              sx={{
                px: 4,
                py: 2,
                borderRadius: "12px",
                fontWeight: "semibold",
                textTransform: "none",
                fontSize: "1rem",
                bgcolor: "white",
                color: "grey.700",
                borderColor: "grey.300",
                borderWidth: "2px",
                "&:hover": {
                  borderColor: "grey.400",
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.2s ease-in-out",
                  borderWidth: "2px",
                },
              }}
            >
              더 알아보기
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
