import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/config";

const initialState = {
  loading: false,
  product: [],
  error: "",
};

const fetchProducts = createAsyncThunk("product/fetchProducts", () => {
  return api.get("/products");
});

const productsSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.product = [];
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;

export { fetchProducts };
