import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAMES } from "../../constants/slices";

const pageSlice = createSlice({
  name: SLICE_NAMES.PAGE,
  initialState: { currentPage: "" },
  reducers: {
    setPage: (state, actions) => {
      state.currentPage = actions.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;

export default pageSlice.reducer;
