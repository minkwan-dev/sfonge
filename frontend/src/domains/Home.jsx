import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  LinearProgress,
  TextField,
  InputAdornment,
  useTheme,
} from "@mui/material";
import WalletIcon from "@mui/icons-material/Wallet";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import GroupIcon from "@mui/icons-material/Group";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import { PageContainer } from "../components/shared";

// Progress Bar
const ProgressBar = ({ goal, raised, progress, investors }) => (
  <Box sx={{ width: "100%", mb: 2 }}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        fontSize: "0.875rem",
        mb: 0.5,
      }}
    >
      <Typography variant="body2" color="grey.600">
        Goal: {goal}
      </Typography>
      <Typography variant="body2" fontWeight="semibold">
        {progress}%
      </Typography>
    </Box>
    <LinearProgress
      variant="determinate"
      value={progress}
      sx={{
        height: 10,
        borderRadius: 5,
        bgcolor: "grey.200",
        "& .MuiLinearProgress-bar": {
          background: "linear-gradient(to right, #212121, #424242)",
          borderRadius: 5,
        },
      }}
    />
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        fontSize: "0.875rem",
        mt: 0.5,
      }}
    >
      <Typography variant="body2" color="grey.600">
        Raised: {raised}
      </Typography>
      <Typography
        variant="body2"
        color="grey.600"
        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
      >
        <GroupIcon sx={{ width: 14, height: 14 }} />
        {investors}
      </Typography>
    </Box>
  </Box>
);

// Sample Data
const SampleData = [
  {
    id: 1,
    title: "AI 헬스케어 플랫폼",
    founder: "0x1234...5678",
    description: "AI 기반 개인 맞춤형 건강 관리 솔루션",
    image: "https://placehold.co/600x400/1f2937/ffffff?text=AI+Healthcare",
    goal: "50 ETH",
    raised: "32.5 ETH",
    progress: 65,
    investors: 127,
    category: "Healthcare",
  },
  {
    id: 2,
    title: "친환경 패키징 스타트업",
    founder: "0xabcd...ef12",
    description: "생분해 가능한 혁신적인 포장재 개발",
    image: "https://placehold.co/600x400/4b5563/ffffff?text=Eco+Packaging",
    goal: "30 ETH",
    raised: "18.9 ETH",
    progress: 63,
    investors: 89,
    category: "Sustainability",
  },
  {
    id: 3,
    title: "블록체인 공급망 관리",
    founder: "0x9876...3210",
    description: "투명한 공급망을 위한 블록체인 솔루션",
    image: "https://placehold.co/600x400/9ca3af/ffffff?text=Blockchain+SCM",
    goal: "100 ETH",
    raised: "78.2 ETH",
    progress: 78,
    investors: 203,
    category: "Blockchain",
  },
];

export default function Home() {
  const theme = useTheme();
  const [connected, setConnected] = useState(false);
  const [activeTab, setActiveTab] = useState("explore");
  const [startups] = useState(SampleData);

  const [searchTerm, setSearchTerm] = useState("");

  // Button Style
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
          {/* tabs */}
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

            <Box
              sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 2 }}
            >
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

          {/* search */}
          {activeTab === "search" && (
            <TextField
              fullWidth
              placeholder="Search projects by title, description, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "grey.400" }} />
                  </InputAdornment>
                ),
                sx: {
                  pl: 1,
                  py: 0.5,
                  borderRadius: "12px",
                  bgcolor: "white",
                  border: "1px solid grey.300",
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                    borderWidth: "2px",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "grey.400",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                },
              }}
              sx={{ mb: 5 }}
            />
          )}
          {/* field */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              gap: 3,
            }}
          >
            {startups.map((s) => (
              <Box
                key={s.id}
                sx={{
                  bgcolor: "white",
                  border: "1px solid grey.200",
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "box-shadow 0.2s",
                  "&:hover": { boxShadow: theme.shadows[6] },
                }}
                className="card"
              >
                <Box
                  sx={{
                    position: "relative",
                    height: 224,
                    overflow: "hidden",
                    bgcolor: "grey.50",
                  }}
                >
                  <Box
                    component="img"
                    src={s.image}
                    alt={s.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s",
                      ".card:hover &": { transform: "scale(1.1)" },
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      bgcolor: "white",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: "8px",
                      fontSize: "0.75rem",
                      fontWeight: "semibold",
                      border: "1px solid grey.200",
                      boxShadow: theme.shadows[2],
                    }}
                  >
                    {s.category}
                  </Box>
                </Box>

                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" fontWeight="semibold" mb={0.5}>
                    {s.title}
                  </Typography>
                  <Typography variant="body2" color="grey.600" mb={3}>
                    {s.description}
                  </Typography>

                  <ProgressBar
                    goal={s.goal}
                    raised={s.raised}
                    progress={s.progress}
                    investors={s.investors}
                  />

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      pt: 2,
                      borderTop: "1px solid grey.100",
                    }}
                  >
                    <Typography
                      variant="caption"
                      color="grey.500"
                      sx={{ fontFamily: "monospace" }}
                    >
                      {s.founder}
                    </Typography>

                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Button
                        disabled={!connected}
                        variant="outlined"
                        disableElevation
                        sx={{
                          gap: 0.5,
                          px: 2,
                          py: 1,
                          borderRadius: "12px",
                          fontSize: "0.875rem",
                          fontWeight: "semibold",
                          textTransform: "none",
                          borderColor: "grey.200",
                          color: "grey.700",
                          opacity: !connected ? 0.5 : 1,
                        }}
                      >
                        <SportsScoreIcon sx={{ width: 16, height: 16 }} />
                        Interested
                      </Button>
                      <Button
                        disabled={!connected}
                        variant="contained"
                        disableElevation
                        sx={{
                          gap: 0.5,
                          px: 2,
                          py: 1,
                          borderRadius: "12px",
                          fontSize: "0.875rem",
                          fontWeight: "semibold",
                          textTransform: "none",
                          background: connected
                            ? "linear-gradient(to right, #212121, #424242)"
                            : "grey.100",
                          color: connected ? "white" : "grey.400",
                        }}
                      >
                        <SendIcon sx={{ width: 16, height: 16 }} />
                        Invest
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </PageContainer>
  );
}
