import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../../helper/helper";

const initialState = {
  selectedItems: [],
  itemCounter: 0,
  totoalPrice: 0,
  checkout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((i) => i.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.itemCounter = sumQuantity(state.selectedItems);
        state.totoalPrice = sumPrice(state.selectedItems);
        state.checkout = false;
      }
    },
    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (i) => i.id !== action.payload.id
      );
      state.selectedItems = newSelectedItems;
      state.itemCounter = sumQuantity(state.selectedItems);
      state.totoalPrice = sumPrice(state.selectedItems);
      // state.checkout = false;
    },
    increaser: (state, action) => {
      const increaseItem = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItems[increaseItem].quantity++;
      state.itemCounter = sumQuantity(state.selectedItems);
      state.totoalPrice = sumPrice(state.selectedItems);
      // state.checkout = false;
    },
    decreaser: (state, action) => {
      const decreaseItem = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItems[decreaseItem].quantity--;
      state.itemCounter = sumQuantity(state.selectedItems);
      state.totoalPrice = sumPrice(state.selectedItems);
      // state.checkout = false;
    },
    checkout: (state) => {
      state.selectedItems = [];
      state.itemCounter = 0;
      state.totoalPrice = 0;
      state.checkout = true;
    },
  },
});

export default cartSlice.reducer;

export const { increaser, decreaser, addItem, removeItem ,checkout} = cartSlice.actions;
