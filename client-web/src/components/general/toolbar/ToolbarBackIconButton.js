import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";

export default function ToolbarBackIconButton(props) {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      sx={{ mr: 2 }}
      {...props}
    >
      <ArrowBackIcon />
    </IconButton>
  );
}
