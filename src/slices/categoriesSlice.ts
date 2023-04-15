import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../asyncThunk";
import { CategoriesState } from "../models/slices";

const initialState = {
  loading: false,
  error: null,
  categories: {},
  subcategories: {},
} as CategoriesState;

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => ({
      loading: false,
      categories: action.payload,
      error: "",
      subcategories: state.subcategories,
    }));
    builder.addCase(fetchCategories.pending, (state, action) => ({
      loading: true,
      categories: state.categories,
      error: state.error,
      subcategories: state.subcategories,
    }));
    builder.addCase(fetchCategories.rejected, (state, action) => ({
      loading: false,
      categories: state.categories,
      error: "Something went wrong!",
      subcategories: state.subcategories,
    }));
  },
});

export default categoriesSlice.reducer;
