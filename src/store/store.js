import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/action/actions";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
