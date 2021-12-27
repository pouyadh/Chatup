import { IconButton } from "@mui/material";
import React from "react";
import MoreIcon from "@mui/icons-material/MoreVert";

export default function ToolbarMoreButton(props) {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      sx={{ ml: 2 }}
      {...props}
    >
      <MoreIcon />
    </IconButton>
  );
}
