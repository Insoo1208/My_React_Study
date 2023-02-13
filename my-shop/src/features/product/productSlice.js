import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productlist: [],
  selectedproduct: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,

  reducers: {
    getAllProducts: (state, payload) => {
      state.productlist = payload.payload;
    },
  }
});

export const { getAllProducts } = productSlice.actions;

export const selectProduct = state => state.product.productlist;

export default productSlice.reducer;