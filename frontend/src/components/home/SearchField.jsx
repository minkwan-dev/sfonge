import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchField = ({ searchTerm, setSearchTerm }) => {
  return (
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
  );
};

export default SearchField;
