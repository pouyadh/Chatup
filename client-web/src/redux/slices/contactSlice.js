import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getContacts = createAsyncThunk("contact/getContacts", async () => {
  return fetch("https://pouyadh.ir/test/contactList.json").then((resp) =>
    resp.json()
  );
});

const initialState = {
  list: [],
  byId: {},
  loadingStatus: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.list.push(payload);
      state.byId[payload.id] = payload;
    },
    remove: (state, { payload }) => {
      state.list = state.list.filter((item) => item.id !== payload.id);
      delete state.byId[payload.id];
    },
  },
  extraReducers: {
    [getContacts.pending]: (state, action) => {
      state.loadingStatus = "pending";
    },
    [getContacts.rejected]: (state, action) => {
      state.loadingStatus = "failed";
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.byId = payload.reduce(
        (byId, item) => ({ ...byId, [item.id]: item }),
        {}
      );
    },
  },
});

export const { add, remove } = contactSlice.actions;
export default contactSlice.reducer;

export const selectContactList = (state) => state.contact.list;
