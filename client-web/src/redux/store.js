import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import navigationReducer from "./slices/navigationSlice";
import conversationReducer from "./slices/conversationSlice";
import contactReducer from "./slices/contactSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    navigation: navigationReducer,
    conversation: conversationReducer,
    contact: contactReducer,
  },
});
