import { createSlice } from "@reduxjs/toolkit";
import TypeProducts from "../models/products";
import { FilterState } from "../models/slices";

const initialState: FilterState = {
  isOpenFilter: false,
  isOpenOrder: false,
  selectedOption: "Ən yenilər",
  brandList: [],
  categoryList: [],
  priceList: [],
  displayedProducts: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    openFilter: (state) => {
      state.isOpenFilter = true;
    },

    closeFilter: (state) => {
      state.isOpenFilter = false;
    },

    changeOrderVisibility: (state) => {
      state.isOpenOrder = !state.isOpenOrder;
    },

    changeOrderSelected: (state, action) => {
      state.selectedOption = action.payload;
    },

    changeBrandList(state, action) {
      if (state.brandList.includes(action.payload))
        return {
          ...state,
          brandList: state.brandList.filter((el) => {
            if (el === action.payload) return false;
            return true;
          }),
        };
      return { ...state, brandList: [...state.brandList, action.payload] };
    },

    changeCategoryList(state, action) {
      if (state.categoryList.includes(action.payload))
        return {
          ...state,
          categoryList: state.categoryList.filter((el) => {
            if (el === action.payload) return false;
            return true;
          }),
        };
      return {
        ...state,
        categoryList: [...state.categoryList, action.payload],
      };
    },

    changePriceList(state, action) {
      if (state.priceList.includes(action.payload))
        return {
          ...state,
          priceList: state.priceList.filter((el) => {
            if (el === action.payload) return false;
            return true;
          }),
        };
      return { ...state, priceList: [...state.priceList, action.payload] };
    },

    clearFilter(state) {
      return { ...state, brandList: [], categoryList: [], priceList: [] };
    },

    changeDisplayedProducts(state, action) {
      return (state = {
        ...state,
        displayedProducts: action.payload
          .filter((el: TypeProducts.Datum) => {
            if (
              !state.brandList[0] ||
              el.categories.find((cat) => state.brandList.includes(cat.slug))
            )
              return true;
            return false;
          })
          .filter((el: TypeProducts.Datum) => {
            if (
              !state.categoryList[0] ||
              el.categories.find((cat) =>
                state.categoryList.includes(cat.name.toLowerCase())
              )
            )
              return true;
            return false;
          })
          .filter((el: TypeProducts.Datum) => {
            if (
              !state.priceList[0] ||
              state.priceList
                .map((element) => element.split("-"))
                .find((element) => {
                  return (
                    +element[0] < +el.price.formatted.replace(",", "") &&
                    +el.price.formatted.replace(",", "") < +element[1]
                  );
                })
            )
              return true;
            return false;
          }),
      });
    },
  },
});

export const {
  openFilter,
  closeFilter,
  changeOrderVisibility,
  changeOrderSelected,
  changeBrandList,
  changePriceList,
  changeCategoryList,
  clearFilter,
  changeDisplayedProducts,
} = filterSlice.actions;
export default filterSlice.reducer;
