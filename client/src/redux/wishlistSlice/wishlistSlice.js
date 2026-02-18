import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items.push(action.payload);
    },

    addItemLocal: (state, action) => {
      // Add new product
      state.items.push(action.payload);
    },

    removeItemLocal: (state, action) => {
      // Remove by id
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
  },
});

export const { setItems, removeItemLocal, addItemLocal } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
