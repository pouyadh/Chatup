import { createSlice } from "@reduxjs/toolkit";

export const PANELS = {
  EXISTING_CONVERSATIONS: "EXISTING_CONVERSATIONS",
  CREATE_CONVERSATION: "CREATE_CONVERSATION",
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    activePanel: PANELS.EXISTING_CONVERSATIONS,
    activeConversationId: null,
  },
  reducers: {
    showExistingConversationsPanel: (state) => {
      state.activePanel = PANELS.EXISTING_CONVERSATIONS;
    },
    showCreateConversationPanel: (state) => {
      state.activePanel = PANELS.CREATE_CONVERSATION;
    },
    setActiveConversationId: (state, action) => {
      state.activeConversationId = action.payload;
    },
  },
});

export const { showExistingConversationsPanel, showCreateConversationPanel } =
  navigationSlice.actions;
export default navigationSlice.reducer;

export const selectActivePanel = (state) => state.navigation.activePanel;
