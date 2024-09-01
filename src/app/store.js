import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productsSlice";
import logger from "redux-logger";
import cartReducer from "../features/cart/cartSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
  // middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
});

export default store;
