import React from "react";

import { PANELS, selectActivePanel } from "../../redux/slices/navigationSlice";
import { useSelector } from "react-redux";
import ExistingConversationsView from "./ExistingConversationsView";
import CreateConversationView from "./CreateConversationView";

export default function NavigatorPanel() {
  const activePanel = useSelector(selectActivePanel);
  switch (activePanel) {
    case PANELS.EXISTING_CONVERSATIONS:
      return <ExistingConversationsView />;
    case PANELS.CREATE_CONVERSATION:
      return <CreateConversationView />;
    default:
      return <ExistingConversationsView />;
  }
}
