import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
    // list: JSON.parse(localStorage.getItem("myTodos")) || [],
  },
  reducers: {
    setTodos: (state, action) => {
      state.list = action.payload;
    },
    addTodo: (state, action) => {
      state.list.push(action.payload);
      // localStorage.setItem("myTodos", JSON.stringify(state.list));
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
      // localStorage.setItem("myTodos", JSON.stringify(state.list));
    },
    toggleTodoComplete: (state, action) => {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        // localStorage.setItem("myTodos", JSON.stringify(state.list));
      }
    },
    toggleTodoStarred: (state, action) => {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isStarred = !todo.isStarred;
        // localStorage.setItem("myTodos", JSON.stringify(state.list));
      }
    },
  },
});

export const {
  setTodos,
  addTodo,
  removeTodo,
  toggleTodoComplete,
  toggleTodoStarred,
  clearTodos,
} = todoSlice.actions;
export default todoSlice.reducer;
