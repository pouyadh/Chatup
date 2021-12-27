import { Typography } from "@mui/material";
import React from "react";

export default function MessageItemText({ text, ...props }) {
  return (
    <Typography variant="body1" sx={{ wordBreak: "break-word" }} {...props}>
      {text}
    </Typography>
  );
}
