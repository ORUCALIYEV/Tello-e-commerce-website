import { createSlice } from "@reduxjs/toolkit";
import { SearchState } from "../models/slices";

const initialState = {
  searchHistory: localStorage.getItem("searchHistory")
    ? JSON.parse(localStorage.getItem("searchHistory")!)
    : [],
} as SearchState;

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeHistory(state, action) {
      if (state.searchHistory.length === 3)
        state.searchHistory = [
          ...state.searchHistory.splice(0, 1),
          action.payload,
        ];
      else state.searchHistory = [...state.searchHistory, action.payload];
      localStorage.setItem(
        "searchHistory",
        JSON.stringify(state.searchHistory)
      );
    },

    deleteHistory(state) {
      state.searchHistory = [];
      localStorage.setItem(
        "searchHistory",
        JSON.stringify(state.searchHistory)
      );
    },
  },
});

export const { changeHistory, deleteHistory } = searchSlice.actions;
export default searchSlice.reducer;
