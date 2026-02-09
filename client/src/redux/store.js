import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./authSlice/authSlice";
import cartReducers from "./cartSlice/cartSlice";
import wishlistReducers from "./wishlistSlice/wishlistSlice";

export const store = configureStore({
  reducer: {
    auth: authReducers,
    cart: cartReducers,
    wishlist: wishlistReducers,
  },
});
