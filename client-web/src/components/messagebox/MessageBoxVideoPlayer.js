import { Box } from "@mui/material";
import React from "react";

export default function MessagbexBoxVideoPlayer({ src, onClose }) {
  const handleClose = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };
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
      onClick={() => handleClose()}
    >
      <video
        style={{
          width: "60%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        autoPlay
        preload="metadata"
        controls
        onClick={(e) => e.stopPropagation()}
      >
        <source src={src + "#t=0.5"} type="video/mp4" />
      </video>
    </Box>
  );
}
