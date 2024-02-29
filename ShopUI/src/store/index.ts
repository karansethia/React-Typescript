import {configureStore} from "@reduxjs/toolkit";
import {cartSlice} from "./cart-slice";

export const store = configureStore({
  reducer: {cart: cartSlice.reducer},
});
export const cartActions = cartSlice.actions;
export type AppDispatch = typeof store.dispatch;
