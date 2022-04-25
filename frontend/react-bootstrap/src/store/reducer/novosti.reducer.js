import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios.input";

export const postNews = createAsyncThunk(
  "news/post",
  async (news, { rejectWithValue }) => {
    try {
      const res = await axios.post("/novostis", news);
      if (!res.data) {
        throw new Error();
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const setPending = (state) => {
  state.loading = "loading";
};
const setRejected = (state) => {
  state.loading = "error";
};

const novostiSlice = createSlice({
  name: "novostis",
  initialState: {
    data: [],
    loading: "",
  },
  extraReducers: {
    [postNews.pending]: setPending,
    [postNews.fulfilled]: (state) => {
      state.loading = "complete";
    },
    [postNews.rejected]: setRejected,
  },
});
export default novostiSlice.reducer;
