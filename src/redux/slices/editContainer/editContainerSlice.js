const { createSlice } = require("@reduxjs/toolkit");

export const editContainerSlice = createSlice({
  name: "sidebar",
  initialState: { isSidebarOpen: false },
  reducers: {
    toggleEditContainer: (state, action) => {
      state.isSidebarOpen = action.payload || !state.isSidebarOpen;
    },
  },
});

export const { toggleEditContainer } = editContainerSlice.actions;
export default editContainerSlice.reducer;
