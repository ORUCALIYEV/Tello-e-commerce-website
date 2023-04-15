import { createSlice } from "@reduxjs/toolkit";
import { TypeInitial } from "../models/slices";

const initialState: TypeInitial = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")!)
  : {
      products: [],
      totalPrice: 0,
      totalQuantity: 0,
    };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToBasket(state, action) {
      if (state.products.find((el) => el.id === action.payload.id)) {
        const item = state.products.find((el) => el.id === action.payload.id);
        return (state = {
          products: [
            ...state.products.filter((el) => {
              if (el.id === action.payload.id) return false;
              return true;
            }),
            {
              price: action.payload.price,
              id: action.payload.id,
              name: action.payload.name,
              quantity: action.payload.quantity + item?.quantity,
              img: action.payload.img,
              color: action.payload.color,
            },
          ],
          totalQuantity: state.totalQuantity + action.payload.quantity,
          totalPrice:
            state.totalPrice + action.payload.quantity * action.payload.price,
        });
      }
      return (state = {
        products: [
          ...state.products,
          {
            price: action.payload.price,
            id: action.payload.id,
            name: action.payload.name,
            quantity: action.payload.quantity,
            img: action.payload.img,
            color: action.payload.color,
          },
        ],
        totalQuantity: state.totalQuantity + action.payload.quantity,
        totalPrice:
          state.totalPrice + action.payload.quantity * action.payload.price,
      });
    },

    deleteItem(state, action) {
      return (state = {
        products: [
          ...state.products.filter((el) => {
            if (el.id === action.payload) return false;
            return true;
          }),
        ],
        totalQuantity:
          state.totalQuantity -
          state.products.find((el) => el.id === action.payload)!.quantity,
        totalPrice:
          state.totalPrice -
          state.products.find((el) => el.id === action.payload)!.quantity *
            Number(
              state.products.find((el) => el.id === action.payload)!.price
            ),
      });
    },

    increaseQuantity(state, action) {
      const item = state.products.find((el) => el.id === action.payload);
      return (state = {
        products: [
          ...state.products.map((el) => {
            if (el.id === action.payload)
              return {
                ...el,
                quantity: el.quantity + 1,
              };
            return el;
          }),
        ],
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + Number(item!.price),
      });
    },

    decreaseQuantity(state, action) {
      const item = state.products.find((el) => el.id === action.payload);
      if (item?.quantity === 1) {
        return (state = {
          products: [
            ...state.products.filter((el) => {
              if (el.id === action.payload) return false;
              return true;
            }),
          ],
          totalQuantity: state.totalQuantity - 1,
          totalPrice: state.totalPrice - Number(item!.price),
        });
      } else {
        return (state = {
          products: [
            ...state.products.map((el) => {
              if (el.id === action.payload)
                return {
                  ...el,
                  quantity: el.quantity - 1,
                };
              return el;
            }),
          ],
          totalQuantity: state.totalQuantity - 1,
          totalPrice: state.totalPrice - Number(item!.price),
        });
      }
    },

    setLocalStorage(state) {
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const {
  addToBasket,
  deleteItem,
  setLocalStorage,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
