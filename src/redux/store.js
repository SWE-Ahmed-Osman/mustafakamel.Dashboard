import { configureStore } from "@reduxjs/toolkit";
import { globalSlice } from "./features";

const store = configureStore({
  reducer: {
    global: globalSlice,
  },
});

export default store;
