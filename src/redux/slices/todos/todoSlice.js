import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [], // Array to store all to-dos
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload); // Add a new to-do
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload); // Remove by ID
    },
    toggleTodoComplete: (state, action) => {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed; // Toggle completion status
      }
    },
    toggleTodoStarred: (state, action) => {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isStarred = !todo.isStarred; // Toggle completion status
      }
    },
    clearTodos: (state) => {
      state.list = []; // Clear all to-dos
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleTodoComplete,
  toggleTodoStarred,
  clearTodos,
} = todoSlice.actions;
export default todoSlice.reducer;
