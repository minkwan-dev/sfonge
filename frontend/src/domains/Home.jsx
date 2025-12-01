import React, { useState } from "react";
import { SampleData } from "../components/home/mock/sample-data";
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { PageContainer } from "../components/shared";
import { TabNavigation, StartupCard } from "../components/home";

export default function Home() {
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
          <TabNavigation
            connected={connected}
            setConnected={setConnected}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setSearchTerm={setSearchTerm}
          />

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
            {startups.map((startup) => (
              <StartupCard
                key={startup.id}
                startup={startup}
                connected={connected}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </PageContainer>
  );
}
