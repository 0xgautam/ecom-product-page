import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type cartItem = {
  id: number;
  product: string;
  quantity: number;
  price: number;
  src: string;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] } as { cart: cartItem[] },
  reducers: {
    addItem(state, action: PayloadAction<cartItem>) {
      if (state.cart.filter((item) => item.id === action.payload.id).length) {
        state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              qauntity: (item.quantity += action.payload.quantity),
            };
          }
          return item;
        });
      } else {
        state.cart.push(action.payload);
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const getQuantity = (state: RootState) => {
  let total = 0;
  state.cartReducer.cart.map((item) => (total += item.quantity));
  return total;
};
export const getCart = (state: RootState) => state.cartReducer.cart;
export const { removeItem, addItem } = cartSlice.actions;
export default cartSlice.reducer;
