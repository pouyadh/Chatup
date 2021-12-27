import { AppBar, Toolbar as MuiToolbar } from "@mui/material";
import React from "react";

export default function Toolbar({ children, appbarProps, ...props }) {
  return (
    <AppBar {...appbarProps}>
      <MuiToolbar {...props}>{children}</MuiToolbar>
    </AppBar>
  );
}
