import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebar/sidebarSlice.js";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});
export default store;
