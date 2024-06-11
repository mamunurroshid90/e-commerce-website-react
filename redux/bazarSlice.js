import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../api/Api";

const initialState = {
  productsData: [],
  userInfo: null,
};

export const bazarSlice = createSlice({
  name: "bazar",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productsData.find(
        (item) => item.id === action.payload.id
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productsData.push(action.payload);
      }
    },
  },
});

export const { addToCart } = bazarSlice.actions;
export default bazarSlice.reducer;
