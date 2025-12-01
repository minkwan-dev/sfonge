import React, { useState } from "react";
import { SampleData } from "../components/home/mock/sample-data";
import { Box } from "@mui/material";
import { PageContainer } from "../components/shared";
import { TabNavigation } from "../components/home";
import StartupCard from "../components/home/StartupCard";
import SearchField from "../components/home/SearchField";

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
            <SearchField
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
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
