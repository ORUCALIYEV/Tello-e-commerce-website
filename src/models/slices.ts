import TypeCategories from "../models/categories";
import TypeProducts from "../models/products";
import { RootObject } from "../models/productInfo";

export interface AuthState {
  loggedIn: boolean;
  rejected: boolean;
}

export interface TypeCart {
  price: string;
  id: string;
  img: string;
  name: string;
  quantity: number;
  color: string;
}

export interface TypeInitial {
  products: TypeCart[];
  totalQuantity: number;
  totalPrice: number;
}

export interface CategoriesState {
  loading: boolean;
  error: null | string;
  categories: TypeCategories.RootObject;
  subcategories: TypeCategories.Child;
}

export interface FilterState {
  isOpenFilter: boolean;
  isOpenOrder: boolean;
  selectedOption: string;
  brandList: string[];
  categoryList: string[];
  priceList: string[];
  displayedProducts: TypeProducts.Datum[];
}

export interface ProductState {
  loading: boolean;
  error: null | string;
  product: RootObject;
}

export interface ProductsState {
  loading: boolean;
  error: null | string;
  products: TypeProducts.RootObject;
}

export interface SearchState {
  searchHistory: string[];
}
