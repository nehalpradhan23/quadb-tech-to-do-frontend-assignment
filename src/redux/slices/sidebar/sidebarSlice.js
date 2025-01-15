const { createSlice } = require("@reduxjs/toolkit");

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: { isSidebarOpen: true },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
