import { createSlice } from "@reduxjs/toolkit";
import { getDocData } from "./Asynchronous";
import { act } from "react";

const edit = createSlice({
  name: "edit",
  initialState: {
    isLoading: true,
    element: {},
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getDocData.pending, (state) => {
      state.element = {};
      state.isLoading = true;
    });
    builder.addCase(getDocData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.element = action.payload;
    });
    builder.addCase(getDocData.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});
export default edit.reducer;
