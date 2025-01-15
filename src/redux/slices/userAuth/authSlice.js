// store/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null, // Holds user info after login
  error: null, // Holds error messages
};

// Load saved state from localStorage if available
if (typeof window !== "undefined") {
  const savedAuth = localStorage.getItem("authState");
  if (savedAuth) {
    const parsedAuth = JSON.parse(savedAuth);
    initialState.isAuthenticated = parsedAuth.isAuthenticated;
    initialState.user = parsedAuth.user;
  }
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;

      // Mock credentials
      const mockUser = {
        username: "test",
        password: "test",
        name: "Test User",
      };

      if (username === mockUser.username && password === mockUser.password) {
        state.isAuthenticated = true;
        state.user = { username: mockUser.username, name: mockUser.name };
        state.error = null;

        // Save state to localStorage
        localStorage.setItem(
          "authState",
          JSON.stringify({
            isAuthenticated: true,
            user: { username: mockUser.username, name: mockUser.name },
          })
        );
      } else {
        state.error = "Invalid username or password.";
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      // Remove state from localStorage
      localStorage.removeItem("authState");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
