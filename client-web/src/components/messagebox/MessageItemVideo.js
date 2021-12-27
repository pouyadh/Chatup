import React from "react";
import PlayArrow from "@mui/icons-material/PlayArrow";
import { IconButton, Typography } from "@mui/material";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

export default function MessageItemVideo({ src, onPlay = () => {} }) {
  const [error, setError] = React.useState(false);

  if (error) {
    return (
      <div style={{ display: "flex" }}>
        <OndemandVideoIcon sx={{ mr: 1 }} />
        <Typography> This video is not available </Typography>
      </div>
    );
  }

  return (
    <div style={{ width: "max", position: "relative" }}>
      <IconButton
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          color: "white",
          zIndex: 100,
          width: "128px",
          height: "128px",
        }}
        onClick={() => onPlay(src)}
      >
        <PlayArrow fontSize="large" />
      </IconButton>
      <video
        style={{ width: "100%" }}
        preload="metadata"
        onError={(e) => setError(true)}
      >
        <source src={src + "#t=0.5"} type="video/mp4" />
        Oops, your browser is too old.
      </video>
    </div>
  );
}
