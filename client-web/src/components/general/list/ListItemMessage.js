import { ListItem } from "@mui/material";
import React from "react";

export default function ListItemMessage({
  jusify = "start",
  sx,
  children,
  ...props
}) {
  return (
    <ListItem sx={{ justifyContent: jusify, ...sx }} {...props}>
      {children}
    </ListItem>
  );
}
