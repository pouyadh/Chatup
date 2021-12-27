import React, { useEffect } from "react";
import ListBox from "./ListBox";
import ListItemConversation from "./ListItemConversation";
import { useSelector, useDispatch } from "react-redux";
import {
  getConversations,
  select,
  selectConversationList,
} from "../../../redux/slices/conversationSlice";

export default function ListConversations({ search }) {
  const conversations = useSelector(selectConversationList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getConversations());
  }, [dispatch]);

  let cons = [];
  if (search) {
    const lowerSearch = search.toLowerCase();
    cons = conversations.filter(
      (item) =>
        item.message.toLowerCase().startsWith(lowerSearch) ||
        item.name.toLowerCase().startsWith(lowerSearch)
    );
  } else {
    cons = conversations;
  }

  return (
    <ListBox>
      {cons.map(({ id, ...cnv }) => (
        <ListItemConversation
          key={id}
          onMouseDown={() => dispatch(select(id))}
          {...cnv}
        />
      ))}
    </ListBox>
  );
}
