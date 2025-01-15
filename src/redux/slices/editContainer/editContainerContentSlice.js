const { createSlice } = require("@reduxjs/toolkit");

export const editTodoSlice = createSlice({
  name: "editTodo",
  initialState: {},
  reducers: {
    addTodoToView: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const {
  addTodoToView,
  editTodo,
  removeTodo,
  toggleTodoComplete,
  toggleTodoStarred,
  clearTodos,
} = editTodoSlice.actions;
export default editTodoSlice.reducer;
