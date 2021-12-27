import React from "react";

//Toolbar
import Toolbar from "../general/toolbar/Toolbar";
import ToolbarBackIconButton from "../general/toolbar/ToolbarBackIconButton";
import ToolbarSearchInput from "../general/toolbar/ToolbarSearchInput";
import ToolbarTitle from "../general/toolbar/ToolbarTitle";

//Container
import ContainerPanel from "../general/container/ContainerPanel";
//List
import ListBox from "../general/list/ListBox";
import ListContacts from "../general/list/ListContacts";
import ListItemButton from "../general/list/ListItemButton";
// Icons
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupsIcon from "@mui/icons-material/Groups";
import CampaignIcon from "@mui/icons-material/Campaign";

// Redux
import { useDispatch } from "react-redux";
import { showExistingConversationsPanel } from "../../redux/slices/navigationSlice";

export default function CreateConversationView() {
  const [search, setSearch] = React.useState("");
  const dispatch = useDispatch();
  return (
    <ContainerPanel>
      <Toolbar>
        <ToolbarBackIconButton
          onClick={() => dispatch(showExistingConversationsPanel())}
        />
        <ToolbarTitle text="Start" />
        <ToolbarSearchInput
          onChange={(e) => setSearch(e.target.value)}
          onBlur={(e) => setSearch("")}
          value={search}
        />
      </Toolbar>
      <ListBox noScroll>
        <ListItemButton caption="Add New Contact" icon={<PersonAddIcon />} />
        <ListItemButton caption="Create New Group" icon={<GroupsIcon />} />
        <ListItemButton caption="Create New Channel" icon={<CampaignIcon />} />
      </ListBox>
      <ListContacts search={search} />
    </ContainerPanel>
  );
}
