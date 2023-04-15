import { createSlice } from "@reduxjs/toolkit";
import { getToken } from "../asyncThunk";
import { AuthState } from "../models/slices";

const initialState = {
  loggedIn: localStorage.getItem("token") ? true : false,
  rejected: false,
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOutUser(state) {
      localStorage.removeItem("token");
      return (state = { loggedIn: false, rejected: false });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getToken.fulfilled, (state, action) => {
      localStorage.setItem("token", action.payload.jwt);
      return { loggedIn: true, rejected: false };
    });

    builder.addCase(getToken.rejected, (state, action) => {
      localStorage.removeItem("token");
      return { loggedIn: false, rejected: true };
    });
  },
});

export const { logOutUser } = authSlice.actions;
export default authSlice.reducer;
