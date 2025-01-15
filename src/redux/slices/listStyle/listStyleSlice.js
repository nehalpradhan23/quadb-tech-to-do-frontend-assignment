const { createSlice } = require("@reduxjs/toolkit");

export const listStyleSlice = createSlice({
  name: "listStyle",
  initialState: { listStyle: "list" },
  reducers: {
    toggleListStyle: (state) => {
      state.listStyle = state.listStyle === "list" ? "grid" : "list";
    },
  },
});

export const { toggleListStyle } = listStyleSlice.actions;
export default listStyleSlice.reducer;
