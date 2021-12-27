import { IconButton } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function ToolbarHambergerButton(props) {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      sx={{ mr: 2 }}
      {...props}
    >
      <MenuIcon />
    </IconButton>
  );
}
