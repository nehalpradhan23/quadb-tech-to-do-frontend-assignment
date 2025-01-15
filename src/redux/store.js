import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebar/sidebarSlice.js";
import listStyleReducer from "./slices/listStyle/listStyleSlice.js";
import todoReducer from "./slices/todos/todoSlice.js";
import editContainerReducer from "./slices/editContainer/editContainerSlice.js";
import editTodoReducer from "./slices/editContainer/editContainerContentSlice.js";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    listStyle: listStyleReducer,
    todos: todoReducer,
    editContainer: editContainerReducer,
    editTodo: editTodoReducer,
  },
});
export default store;
