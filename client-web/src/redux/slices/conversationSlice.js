import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getConversations = createAsyncThunk(
  "conversation/getConversations",
  async () => {
    return fetch("https://pouyadh.ir/test/conversationList.json").then((resp) =>
      resp.json()
    );
  }
);

const initialState = {
  list: [],
  byId: {},
  loadingStatus: null,
  title: "Connecting...",
  selectedConversationId: null,
};

const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    startPrivate: (state, action) => {},
    startGroup: (state, action) => {},
    startChannel: (state, action) => {},
    leave: (state, action) => {},
    say: (state, action) => {},
    select: (state, action) => {
      state.selectedConversationId = action.payload;
    },
  },
  extraReducers: {
    [getConversations.pending]: (state, action) => {
      state.loadingStatus = "pending";
      state.title = "Updating...";
    },
    [getConversations.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.byId = payload.reduce(
        (result, item) => ({ ...result, [item.id]: item }),
        {}
      );
      state.loadingStatus = "success";
      state.title = "Chatup";
    },
    [getConversations.rejected]: (state, action) => {
      state.loadingStatus = "failed";
      state.title = "Connecting...";
    },
  },
});

export const { startPrivate, startGroup, startChannel, leave, say, select } =
  conversationSlice.actions;
export const selectConversationList = (state) => state.conversation.list;
export default conversationSlice.reducer;
