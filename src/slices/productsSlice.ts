import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../asyncThunk";
import { ProductsState } from "../models/slices";

const initialState = {
  loading: false,
  error: null,
  products: {},
} as ProductsState;

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => ({
      loading: false,
      products: action.payload,
      error: "",
    }));
    builder.addCase(fetchProducts.pending, (state, action) => ({
      loading: true,
      products: state.products,
      error: state.error,
    }));
    builder.addCase(fetchProducts.rejected, (state, action) => ({
      loading: false,
      products: state.products,
      error: "Something went wrong!",
    }));
  },
});

export default productsSlice.reducer;
