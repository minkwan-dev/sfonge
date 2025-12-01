import React, { useState } from "react";
import { SampleData } from "../components/home/mock/sample-data";
import {
  Box,
  Typography,
  Button,
  LinearProgress,
  TextField,
  InputAdornment,
  useTheme,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import GroupIcon from "@mui/icons-material/Group";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import { PageContainer } from "../components/shared";
import { TabNavigation } from "../components/home";

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

export default function Home() {
  const theme = useTheme();
  const [connected, setConnected] = useState(false);
  const [activeTab, setActiveTab] = useState("explore");
  const [startups] = useState(SampleData);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <PageContainer>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "white",
          pt: { xs: "4rem", sm: "5rem" },
          pb: { xs: "4rem", sm: "5rem" },
          px: 3,
        }}
      >
        <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3, pt: 4, pb: 8 }}>
          {/* tabs */}
          <TabNavigation
            connected={connected}
            setConnected={setConnected}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setSearchTerm={setSearchTerm}
          />
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
