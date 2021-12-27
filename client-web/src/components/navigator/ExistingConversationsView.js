import React from "react";

//Container
import ContainerPanel from "../general/container/ContainerPanel";
// Toolbar
import Toolbar from "../general/toolbar/Toolbar";
import ToolbarHambergerButton from "../general/toolbar/ToolbarHambergerButton";
import ToolbarTitle from "../general/toolbar/ToolbarTitle";
import ToolbarSearchInput from "../general/toolbar/ToolbarSearchInput";
// List
import ListConversations from "../general/list/ListConversations";

import { useSelector } from "react-redux";
import FabCreateConversation from "../general/floating/FabCreateConversation";

// Redux
import { useDispatch } from "react-redux";
import { showCreateConversationPanel } from "../../redux/slices/navigationSlice";

export default function ExistingConversationsView() {
  const title = useSelector((state) => state.conversation.title);
  const [search, setSearch] = React.useState("");
  const dispatch = useDispatch();
  return (
    <ContainerPanel>
      <Toolbar>
        <ToolbarHambergerButton />
        <ToolbarTitle text={title} />
        <ToolbarSearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onBlur={() => setSearch("")}
        />
      </Toolbar>
      <ListConversations search={search} />
      <FabCreateConversation
        onClick={() => dispatch(showCreateConversationPanel())}
      />
    </ContainerPanel>
  );
}
