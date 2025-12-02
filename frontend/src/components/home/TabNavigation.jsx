import React from "react";
import { Box, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TabNavigation = ({ activeTab, setActiveTab, setSearchTerm }) => {
  const theme = useTheme();
  const navigate = useNavigate();

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
        <Button
          onClick={handleCreateProject}
          variant="outlined"
          sx={{ ...btnStyle(false) }}
        >
          프로젝트 생성하기
        </Button>
      </Box>
    </Box>
  );
};

export default TabNavigation;
