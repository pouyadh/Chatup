import { ListItem, Paper, Typography } from "@mui/material";
import React from "react";

import MessageStatus from "./MessageStatus";

const Timestamp = ({ timestamp }) => {
  const dt = new Date(timestamp);
  const hours = dt.getHours();
  const minutes = dt.getMinutes();
  return (
    <Typography fontSize=".7rem" marginRight={0.5}>
      {`${hours}:${minutes}`}
    </Typography>
  );
};

export default function MessageItem({
  children,
  isMe,
  time = "--:--",
  sent,
  seen,
}) {
  return (
    <ListItem
      sx={{
        justifyContent: isMe ? "end" : "start",
      }}
    >
      <Paper
        sx={{
          pt: 1,
          pl: 1,
          pr: 1,
          bgcolor: isMe ? "primary.light" : "background.paper",
          color: isMe ? "common.white" : "common.black",
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
        }}
      >
        {children}
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Typography fontSize=".7rem" marginRight={0.5}>
            {time}
          </Typography>
          <MessageStatus sent={sent} seen={seen} />
        </div>
      </Paper>
    </ListItem>
  );
}
