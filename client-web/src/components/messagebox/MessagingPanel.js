import React from "react";

import ContainerPanel from "../general/container/ContainerPanel";
import Toolbar from "../general/toolbar/Toolbar";

import { Tooltip, IconButton, Avatar } from "@mui/material";
import ToolbarTitle from "../general/toolbar/ToolbarTitle";
import ToolbarSearchInput from "../general/toolbar/ToolbarSearchInput";
import ToolbarMoreButton from "../general/toolbar/ToolbarMoreButton";

import MessageBox from "./MessageBox";
import MessageItem from "./MessageItem";
import MessageItemText from "./MessageItemText";
import MessageItemImage from "./MessageItemImage";
import MessageItemVoice from "./MessageItemVoice";
import MessageItemMusic from "./MessageItemMusic";
import MessageItemVideo from "./MessageItemVideo";
import MessageBoxVideoPlayer from "./MessageBoxVideoPlayer";
import MessageBoxAudioPlayer from "./MessageBoxAudioPlayer";
import MessageBoxImageViewer from "./MessageBoxImageViewer";

const audio =
  "https://irsv.upmusics.com/AliBZ/Majid%20Razavi%20%7C%20Negin%20Ghalbami%20(128).mp3";
const v1 =
  "https://hajifirouz2.cdn.asset.aparat.com/aparat-video/df1d92e420601c20815fe56073fe339139875715-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjlhOWMzMTJiOGI5ZDAwMjE5Mzk5MzhiYTZjYzQ2ZWU2IiwiZXhwIjoxNjM5MzY0Mzg2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.Iw9nONZ_PwrMEQsBsEGlGaE_xBHThoKcsAqfnME4Aqo";
const v2 =
  "https://aspb33.cdn.asset.aparat.com/aparat-video/6ec13ab2bb3a92cb21faa3b4074998ff38166496-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjQ0ZWIyYmZlMTRiNmExYjg0OWJhYzk0ZmJkYTdhOTZiIiwiZXhwIjoxNjM5MzY0ODgyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.vqDr_goTlz01Fln7sW3yRUtuUautwP8v9ITDEoh1FZk";

const music1 = {
  thumbSrc:
    "https://www.mondosonoro.com/wp-content/uploads/2020/02/adele-press.jpg",
};
const music2 = {
  thumbSrc: "https://upmusics.com/wp-content/uploads/2021/12/gwe-2.jpg",
  src: "https://irsv.upmusics.com/AliBZ/Majid%20Razavi%20%7C%20Negin%20Ghalbami%20(128).mp3",
  title: "جدید رضوی با نام نگین قلبمی",
};

export default function MessagingPanel() {
  const [videoSrc, setVideoSrc] = React.useState("");
  const [audio, setAudio] = React.useState(null);
  const [image, setImage] = React.useState(null);
  return (
    <ContainerPanel>
      <Toolbar sx={{ borderLeft: "1px solid rgba(255,255,255,0.1)" }}>
        <Tooltip title="Open settings">
          <IconButton sx={{ pr: 2 }}>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/2.jpg"
            />
          </IconButton>
        </Tooltip>
        <ToolbarTitle text="heyadar" />
        <ToolbarSearchInput />
        <ToolbarMoreButton />
      </Toolbar>
      {image && (
        <MessageBoxImageViewer {...image} onClose={() => setImage(null)} />
      )}
      {audio && (
        <MessageBoxAudioPlayer {...audio} onClose={() => setAudio(null)} />
      )}
      <MessageBox sx={{ flex: 1 }}>
        <MessageItem isMe={true}>
          <MessageItemImage src="https://www.pixsy.com/wp-content/uploads/2021/04/edi-libedinsky-1bhp9zBPHVE-unsplash-1-1024x683.jpeg" />
          <MessageItemText text="This is a picture sda afkdsjaflkdbf dafldsnflk adflkjsdflkjba" />
        </MessageItem>
        <MessageItem isMe={false}>
          <MessageItemText text="This is a normal text!" />
        </MessageItem>
        <MessageItem isMe={true}>
          <MessageItemVoice />
        </MessageItem>
        <MessageItem isMe={false}>
          <MessageItemMusic {...music2} onPlay={setAudio} />
        </MessageItem>
        <MessageItem isMe={false}>
          <MessageItemVideo src={v1} onPlay={(src) => setVideoSrc(src)} />
        </MessageItem>
        <MessageItem isMe={true}>
          <MessageItemVideo src={v2} onPlay={(src) => setVideoSrc(src)} />
        </MessageItem>
      </MessageBox>
      {videoSrc && (
        <MessageBoxVideoPlayer src={videoSrc} onClose={() => setVideoSrc("")} />
      )}
    </ContainerPanel>
  );
}
