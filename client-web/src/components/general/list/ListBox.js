import React from "react";
import { List, Box } from "@mui/material";

export default function ListBox({ sx, children, noScroll, ...props }) {
  return (
    <Box sx={{ overflow: "hidden", ...sx }} {...props}>
      <List sx={{ height: "100%", overflowY: noScroll ? "unset" : "scroll" }}>
        {children}
      </List>
    </Box>
  );
}
