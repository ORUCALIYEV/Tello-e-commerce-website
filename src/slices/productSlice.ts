import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "../asyncThunk";
import { ProductState } from "../models/slices";

const initialState = {
  loading: false,
  error: null,
  product: {},
} as ProductState;

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => ({
      loading: false,
      product: action.payload,
      error: null,
    }));
    builder.addCase(fetchProduct.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchProduct.rejected, (state) => ({
      ...state,
      loading: false,
      error: "Something went wrong!",
    }));
  },
});

export default productSlice.reducer;
