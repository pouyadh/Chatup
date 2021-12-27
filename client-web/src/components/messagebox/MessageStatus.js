import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const sx = {
  width: ".8rem",
};

export default function MessageStatus({ sent, seen }) {
  if (seen) {
    return <DoneAllIcon sx={sx} />;
  } else if (sent) {
    return <DoneIcon color="grey.400" sx={sx} />;
  } else {
    return <AccessTimeIcon color="grey.400" sx={sx} />;
  }
}
