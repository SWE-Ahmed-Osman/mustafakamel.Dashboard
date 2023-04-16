import { createSlice } from "@reduxjs/toolkit";
import { getGlobalData } from "../services";

const initialState = {
  data: null,
  error: null,
  loading: null,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGlobalData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getGlobalData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload.Profile;
    });
    builder.addCase(getGlobalData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    });
  },
});

export default globalSlice.reducer;
