import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const getGlobalData = createAsyncThunk(
  "global/getGlobalData",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await api.get("/GetDashboard/Index");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
