import React from "react";
import {
  ListItem,
  ListItemButton as MuiListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function ListItemButton({ icon, caption, ...props }) {
  return (
    <ListItem disablePadding {...props}>
      <MuiListItemButton>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={caption} />
      </MuiListItemButton>
    </ListItem>
  );
}
