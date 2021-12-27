import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { IconButton, Slider, Typography } from "@mui/material";

//import { play } from "../../redux/slices/playerSlice";
//import { useDispatch } from "react-redux";

export default function MessageItemVoice({ src, title }) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  //const dispatch = useDispatch();
  return (
    <>
      <Typography sx={{ ml: 2 }}> {title} </Typography>
      <div style={{ display: "flex", alignItems: "center", width: "250px" }}>
        <IconButton
          sx={{ mr: 2, color: "inherit" }}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <Slider size="small" sx={{ marginRight: 2 }} />
        <Typography variant="caption">20:21</Typography>
      </div>
    </>
  );
}
