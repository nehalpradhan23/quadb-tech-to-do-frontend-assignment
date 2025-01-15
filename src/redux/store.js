import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebar/sidebarSlice.js";
import listStyleReducer from "./slices/listStyle/listStyleSlice.js";
import todoReducer from "./slices/todos/todoSlice.js";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    listStyle: listStyleReducer,
    todos: todoReducer,
  },
});
export default store;
