import { createSlice } from "@reduxjs/toolkit";
import { deleteUserCredentials } from "../../utils/helpers";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    accessToken: null,
    refreshToken: null,
    user: {},
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
    },
    logout: (state) => {
      deleteUserCredentials();
      state.isAuthenticated = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.user = {};
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
