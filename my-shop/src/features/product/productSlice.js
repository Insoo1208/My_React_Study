import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../api/productAPI";

const initialState = {
  productList: [],
  selectedProduct: {},
  status: 'idle'
};

// thunk를 이용한 비동기 작업 처리하기
// 이점
// 1) API 요청에 대한 상태 관리가 쉬움 (요청 시작 - 로딩중, 요청 성공/실패 시 로딩이 끝났음을 명시)
// 2) 요청이 성공하면 응답에 대한 상태 관리, 실패하면 에러에 대한 상태 관리 등
// thunk: 미들웨어(액션을 디스패치 했을 때 리듀서에서 이를 처리하기에 앞서 사전에 지정된 작업을 실행)
// 액션과 리듀서 중간에 끼어있는 역할, 액션 -> (미들웨어) -> 리듀서
// createAsyncThunk()는 비동기 작업을 처리하는 액션 생성 함수를 만들어 줌
export const getMoreProductAsync = createAsyncThunk(
  'product/getMoreProductsAsync', // action type
  async () => { // action이 발생했을 때 실행 할 비동기 작업
    return await getProducts(); // 값을 반환하면 'fulfilled'로 바뀜, action.payload에 담겨 리듀서 함수로 전달됨
  }
);

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
  },
  // 비동기적인 작업에는 extraReducers를 사용
  // 
  extraReducers: builder => {
    builder
      .addCase(getMoreProductAsync.pending, state => { // pending 상태일 때 동작할 리듀서
        state.status = 'loading';
      })
      .addCase(getMoreProductAsync.fulfilled, (state, action) => { // fulfilled 상태일 때 동작할 리듀서
        state.status = 'idle'; // complete, success 등
        state.productList.push(...action.payload);
      })
      .addCase(getMoreProductAsync.rejected, state => { // rejective 상태일 때 동작할 리듀서
        state.status = 'fail';
      })
  }
});

export const { getAllProducts, getProductById, getMoreProducts } = productSlice.actions;
export const selectProduct = state => state.product.productList;
export const selectedProduct = state => state.product.selectedProduct;
export const selectStatus = state => state.product.status;
export default productSlice.reducer;