import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

export default function FabCreateConversation({ sx, ...props }) {
  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{ ...fabStyle, ...sx }}
      {...props}
    >
      <AddIcon />
    </Fab>
  );
}
