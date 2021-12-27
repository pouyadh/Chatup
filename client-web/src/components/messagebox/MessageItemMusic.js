import React from "react";

import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton, Typography } from "@mui/material";

export default function MessageItemMusic({
  title,
  src,
  thumbSrc,
  onPlay = () => {},
}) {
  return (
    <>
      <div style={{ display: "flex" }}>
        <MusicNoteIcon />
        <Typography noWrap sx={{ ml: 0, mb: 1, alignSelf: "center", flex: 1 }}>
          {title || "No Title"}
        </Typography>
        <IconButton
          sx={{ color: "inherit", height: "24px" }}
          onClick={() => onPlay({ thumbSrc, src, title })}
        >
          <PlayArrowIcon />
        </IconButton>
      </div>
      {thumbSrc && (
        <img
          src={thumbSrc}
          alt=""
          style={{
            alignSelf: "stretch",
            borderRadius: "10px",
          }}
        />
      )}
    </>
  );
}
