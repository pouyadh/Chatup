import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  audio: new Audio(),
  src: "",
};

const playerSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    setSource: (state, { payload }) => {
      state.src = payload;
      state.audio.src = payload;
    },
    play: (state, { payload }) => {
      if (payload) {
        state.src = payload;
        state.audio.src = payload;
      }
      state.audio.play();
    },
    pause: (state, action) => {
      state.audio.pause();
    },
    toggle: (state, { payload }) => {
      if (payload) {
        if (state.src !== payload) {
          state.src = payload;
          state.audio.src = payload;
          state.audio.play();
        } else {
          if (state.audio.paused) {
            state.audio.play();
          } else {
            state.audio.pause();
          }
        }
      } else {
        if (state.audio.paused) {
          state.audio.play();
        } else {
          state.audio.pause();
        }
      }
    },
  },
});

export const { setSource, play, pause } = playerSlice.actions;
export default playerSlice.reducer;
