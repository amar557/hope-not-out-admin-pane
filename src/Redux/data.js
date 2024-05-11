import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./Asynchronous";

const initialstate = {
  productsdata: [],
  isLoading: true,
  error: "",
};
const slice = createSlice({
  name: "amar",
  initialState: initialstate,
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productsdata = action.payload;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
export default slice.reducer;
