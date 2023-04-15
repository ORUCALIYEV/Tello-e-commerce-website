import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../server/index";

// authSlice
export const getToken = createAsyncThunk(
  "auth/getToken",
  async (token: string) => {
    try {
      const res = await api.post(
        `/customers/exchange-token`,
        { token },
        {
          headers: {
            "X-Authorization":
              "pk_44386608295f2dec42a0e0ec39c5a871fe0f5b0b1e1bc",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.data.jwt) throw new Error("Link is not valid anymore!");
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

//categoriesSlice
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const res = await api.get("/categories", {
        headers: {
          "X-Authorization": "pk_44386608295f2dec42a0e0ec39c5a871fe0f5b0b1e1bc",
        },
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

//productSlice
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id?: string) => {
    try {
      const res = await api.get(`/products/${id}`, {
        headers: {
          "X-Authorization": "pk_44386608295f2dec42a0e0ec39c5a871fe0f5b0b1e1bc",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

//productsSlice
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (limit: number = 100) => {
    try {
      const res = await api.get(`/products?limit=${limit}`, {
        headers: {
          "X-Authorization": "pk_44386608295f2dec42a0e0ec39c5a871fe0f5b0b1e1bc",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      return res.data;
    } catch (error) {
      throw error;
    }
  }
);
