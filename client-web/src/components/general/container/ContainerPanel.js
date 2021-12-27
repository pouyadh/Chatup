import { Box } from "@mui/material";
import React from "react";

export default function ContainerPanel({ children, sx, ...props }) {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
