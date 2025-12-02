import React from "react";
import { Box } from "@mui/material";

const ComponentWrapper = ({ children, sx, ...props }) => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        flexGrow: 1,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default ComponentWrapper;
