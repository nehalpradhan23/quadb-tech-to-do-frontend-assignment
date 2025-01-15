import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebar/sidebarSlice.js";
import listStyleReducer from "./slices/listStyle/listStyleSlice.js";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    listStyle: listStyleReducer,
  },
});
export default store;
