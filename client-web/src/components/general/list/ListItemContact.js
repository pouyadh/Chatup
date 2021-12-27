import React from "react";
import {
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemButton,
  Typography,
} from "@mui/material";

export default function ListItemContact({ id, name, avatarUrl, lastSeen }) {
  return (
    <>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar alt={name} src={avatarUrl} />
        </ListItemAvatar>
        <div style={{ flexGrow: 1, overflow: "hidden" }}>
          <ListItemText primary={name} secondary={id} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="caption" color="GrayText">
              {lastSeen}
            </Typography>
          </div>
        </div>
      </ListItemButton>
    </>
  );
}
