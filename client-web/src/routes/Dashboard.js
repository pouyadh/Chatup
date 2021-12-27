import { Grid } from "@mui/material";
import React from "react";
import MessagingPanel from "../components/messagebox/MessagingPanel";

import NavigatorPanel from "../components/navigator/NavigatorPanel";

export default function Dashboard() {
  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <NavigatorPanel />
      </Grid>
      <Grid item sm={8} display={{ xs: "none", sm: "inline-block" }}>
        <MessagingPanel />
      </Grid>
    </Grid>
  );
}
