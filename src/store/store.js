import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
