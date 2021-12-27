import React, { useEffect } from "react";
import ListBox from "./ListBox";
import ListItemContact from "./ListItemContact";
import { useSelector, useDispatch } from "react-redux";
import { startPrivate } from "../../../redux/slices/conversationSlice";
import {
  getContacts,
  selectContactList,
} from "../../../redux/slices/contactSlice";

export default function ListConversations({ search }) {
  const contacts = useSelector(selectContactList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  let cons = [];
  if (search) {
    const lowerSearch = search.toLowerCase();
    cons = contacts.filter(
      (item) =>
        item.id
          .toString()
          .toLowerCase()
          .startsWith("@" + lowerSearch) ||
        item.name.toLowerCase().startsWith(lowerSearch)
    );
  } else {
    cons = contacts;
  }

  return (
    <ListBox>
      {cons.map(({ id, ...con }) => (
        <ListItemContact
          key={id}
          onMouseDown={() => dispatch(startPrivate(id))}
          {...con}
        />
      ))}
    </ListBox>
  );
}
