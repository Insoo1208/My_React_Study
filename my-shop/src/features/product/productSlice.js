import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  selectedProduct: {},
};

// 상품 정보를 담을 Slice
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.productList = action.payload;
    },
    getProductById: (state, action) => {
      state.selectedProduct = action.payload;
    },
    getMoreProducts: (state, action) => {
      state.productList.push(...action.payload);
    }
  }
});

export const { getAllProducts, getProductById, getMoreProducts } = productSlice.actions;
export const selectProduct = state => state.product.productList;
export const selectedProduct = state => state.product.selectedProduct;
export default productSlice.reducer;