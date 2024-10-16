import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAMES } from "../../constants/slices";

const initialState = JSON.parse(localStorage.getItem("user")) || null;

const userSlice = createSlice({
  name: SLICE_NAMES.USER,
  initialState,
  reducers: {
    setUser: (state, actions) => {
      localStorage.setItem("user", JSON.stringify(actions.payload));
      return {
        ...state,
        ...actions.payload,
      };
    },
    logoutUser: (state) => {
      localStorage.removeItem("user");
      return null;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
