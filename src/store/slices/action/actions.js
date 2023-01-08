import { createSlice } from "@reduxjs/toolkit";
import { userState as initialState } from "./initialState";

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    showProfileFn: (state) => {
      state.showProfile = !state.showProfile;
    },
    showFriendProfileFn: (state) => {
      state.showFriendProfile = !state.showFriendProfile;
    },
    showFriendsListFn: (state) => {
      state.showFriends = !state.showFriends;
    },
    showUserMenuFn: (state) => {
      state.showUserMenu = !state.showUserMenu;
    },
    darkModeFn: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const {
  darkModeFn,
  showFriendProfileFn,
  showFriendsListFn,
  showProfileFn,
  showUserMenuFn,
} = userSlice.actions;

export default userSlice.reducer;
