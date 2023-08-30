import { createSlice } from "@reduxjs/toolkit";

export const utilsSlice = createSlice({
  name: "utils",
  initialState: {
    loading: false,
    notify: {
      open: false,
      action: null,
      severity: null,
      autoHideDuration: 5000,
      vertical: "bottom",
      horizontal: "right",
    },
    activeTab: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setNotify: (state, action) => {
      state.notify = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setLoading, setActiveTab, setNotify } = utilsSlice.actions;

export default utilsSlice.reducer;
