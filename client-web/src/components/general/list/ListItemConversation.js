import React from "react";
import {
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemButton,
  Typography,
} from "@mui/material";

export default function ListItemConversation({
  id,
  name,
  avatarUrl,
  message,
  status,
  timestamp,
  ...props
}) {
  return (
    <>
      <ListItemButton {...props}>
        <ListItemAvatar>
          <Avatar alt={name} src={avatarUrl} />
        </ListItemAvatar>
        <div style={{ flexGrow: 1, overflow: "hidden" }}>
          <ListItemText
            primary={name}
            secondary={message}
            secondaryTypographyProps={{ noWrap: true, component: "div" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="caption" color="GrayText">
              {timestamp}
            </Typography>
            <Typography variant="caption" color="GrayText">
              {status}
            </Typography>
          </div>
        </div>
      </ListItemButton>
    </>
  );
}
