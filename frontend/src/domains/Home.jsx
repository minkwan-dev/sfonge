import React from "react";
import { Box } from "@mui/material";
import { PageContainer } from "../components/shared";

export default function Home() {
  return (
    <PageContainer>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "white",
          pt: { xs: "4rem", sm: "5rem" },
          pb: { xs: "5rem", sm: "7.5rem" },
          px: 3,
        }}
      >
        <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3, pt: 4, pb: 8 }}>
          일종의 대시보드
        </Box>
      </Box>
    </PageContainer>
  );
}
