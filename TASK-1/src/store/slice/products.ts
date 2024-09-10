import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TProductReduxState } from "../../types/products";
import { getProducts } from "../../api/products/get";

const initialState: TProductReduxState = {
  isLoading: true,
  error: null,
  products: [],
};

// add one quote using random api - use of createAsycThunk
// Simulate an API call
export const fetchAllProduct = createAsyncThunk(
  "product/fetchAllProducts",
  getProducts
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProduct.pending, (state) => {
        console.log("Pending state: ", state);
        state.isLoading = true;
      })
      .addCase(fetchAllProduct.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        console.log("Fulfilled state: ", state);
      })
      .addCase(fetchAllProduct.rejected, (state) => {
        console.log("Error state: ", state);
        state.isLoading = false;
      });
  },
  reducers: {},
});

export default productSlice.reducer;
