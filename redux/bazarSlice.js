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
    deleteItem: (state, action) => {
      state.productsData = state.productsData.filter(
        (item) => item.id !== action.payload
      );
    },

    resetCart: (state) => {
      state.productsData = [];
    },
    incrementQuantity: (state, action) => {
      const item = state.productsData.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.productsData.find(
        (item) => item.id === action.payload.id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
  },
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  incrementQuantity,
  decrementQuantity,
} = bazarSlice.actions;
export default bazarSlice.reducer;
