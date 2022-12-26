import { TProduct } from "./../../types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../types/cart";

const initialState: { items: CartItem[] } = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      const existedItem = state.items.find(
        (product) => product._id === action.payload._id
      );

      let newCartItems: CartItem[] = [];

      if (existedItem) {
        newCartItems = state.items.map((product) =>
          existedItem._id === product._id
            ? {
                ...product,
                quantity: product.quantity + 1,
              }
            : product
        );
      } else {
        const cartItem: CartItem = {
          ...action.payload,
          quantity: 1,
        };
        newCartItems = [...state.items, cartItem];
      }

      state.items = newCartItems;
    },
    decreaseQty: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      if (action.payload.quantity === 1) {
        state.items = state.items.filter(
          (product) => product._id !== action.payload.id
        );
        return;
      }

      state.items = state.items.map((product) =>
        product._id === action.payload.id
          ? {
              ...product,
              quantity: product.quantity - 1,
            }
          : product
      );
    },
    increaseQty: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      state.items = state.items.map((product) =>
        product._id === action.payload.id
          ? {
              ...product,
              quantity: product.quantity + 1,
            }
          : product
      );
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (product) => product._id !== action.payload
      );
    },
  },
});

export const { addToCart, increaseQty, decreaseQty, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
