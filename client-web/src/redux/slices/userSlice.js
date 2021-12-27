import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "@JhnDo",
    name: null,
    bio: null,
    avatarUrl: null,
  },
  reducers: {
    setUser: (state, action) => {
      state = { ...state, ...action.payload };
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
