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

    removeItems: (state, action) => {
      return state.items.filter((item) => item._id !== action.payload);
    },
  },
});

export const { setItems, removeItems } = wishlistSlice.actions;
export default wishlistSlice.reducer;
