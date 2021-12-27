import React from "react";
import { Box } from "@mui/material";

export default function MessageBoxImageViewer({ src, onClose = () => {} }) {
  return (
    <Box
      sx={{
        bgcolor: "rgba(0,0,0,.6)",
        position: "absolute",
        zIndex: 200,
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
      onClick={() => onClose()}
    >
      <img
        style={{
          width: "60%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        src={src}
        alt=""
      />
    </Box>
  );
}
