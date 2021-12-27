import { Box, IconButton, Slider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import PlayArrow from "@mui/icons-material/PlayArrow";
import Pause from "@mui/icons-material/Pause";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import CloseIcon from "@mui/icons-material/Close";
import MovingTypography from "../general/widgets/MovingTypography";

const time2str = (tsec) => {
  const sec = Math.round(tsec % 60)
    .toString()
    .padStart(2, "0");
  const min = Math.round(tsec / 60)
    .toString()
    .padStart(2, "0");
  return `${min}:${sec}`;
};

export default function MessageBoxAudioPlayer({
  title,
  src,
  onClose = () => {},
}) {
  const [sliderSize, setSliderSize] = React.useState("small");
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const audio = React.useRef();
  const sliderChangeValue = React.useRef(null);
  const handlePlayPauseClick = () => {
    if (audio.current.paused) {
      setIsPlaying(true);
      audio.current.play();
    } else {
      setIsPlaying(false);
      audio.current.pause();
    }
  };
  useEffect(() => {
    const au = audio.current;
    const handleTime = (e) => {
      setCurrentTime(e.target.currentTime);
    };
    const handleMeta = (e) => {
      setDuration(e.target.duration);
    };
    const handleEnd = (e) => {
      setIsPlaying(!e.target.paused);
    };
    au.addEventListener("timeupdate", handleTime);
    au.addEventListener("loadedmetadata", handleMeta);
    au.addEventListener("ended", handleEnd);
    au.play();
    return () => {
      au.removeEventListener("timeupdate", handleTime);
      au.removeEventListener("loadedmetadata", handleMeta);
      au.removeEventListener("ended", handleEnd);
    };
  }, [audio]);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "primary.dark",
        color: "common.white",
        pr: 1,
        pl: 1,
      }}
    >
      <MusicNoteIcon />
      <MovingTypography
        variant="subtitle1"
        noWrap
        width={150}
        interval={3}
        text={title}
      />
      {/* <Typography variant="subtitle1" noWrap width={150}>
        {title}
      </Typography> */}
      <IconButton sx={{ color: "inherit" }} onClick={handlePlayPauseClick}>
        {isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Typography variant="caption">{time2str(duration)}</Typography>
      <Slider
        size={sliderSize}
        sx={{ ml: 2, mr: 2, color: "white" }}
        min={0}
        max={duration}
        value={currentTime}
        onMouseEnter={() => setSliderSize("medium")}
        onMouseLeave={() => setSliderSize("small")}
        onChange={(e) => (sliderChangeValue.current = e.target.value)}
        onChangeCommitted={() => {
          audio.current.currentTime = sliderChangeValue.current;
        }}
        componentsProps={{
          thumb: {
            sx: { transition: "all .1s ease" },
          },
        }}
      />
      <Typography variant="caption">{time2str(currentTime)}</Typography>
      <IconButton sx={{ color: "inherit" }} onClick={() => onClose()}>
        <CloseIcon />
      </IconButton>
      <audio src={src} ref={audio} />
    </Box>
  );
}
