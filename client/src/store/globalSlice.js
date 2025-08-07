import { signupAdmin , loginAdmin , getPrile } from "./globalAction";


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    // Synchronous actions
    clearError: (state) => {
      state.error = null;
    },
    showLoader: (state) => {
      state.loading = true;
    },
    hideLoader: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    

 
  
  },
});

export const { clearError, showLoader, hideLoader } =
  globalSlice.actions;

export default globalSlice.reducer;