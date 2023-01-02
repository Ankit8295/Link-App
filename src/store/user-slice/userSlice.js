import { createSlice } from "@reduxjs/toolkit";
import { userState as initialState } from "./userState";

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    showProfileFn: (state) => {
      state.showProfile = !state.showProfile;
    },
    showFriendsListFn: (state) => {
      state.showFriends = !state.showFriends;
    },
    showUserMenuFn: (state, action) => {
      state.showUserMenu = !state.showUserMenu;
    },
  },
});

export const { showFriendsListFn, showProfileFn, showUserMenuFn } =
  userSlice.actions;

export default userSlice.reducer;
