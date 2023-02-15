import { createSlice, current } from "@reduxjs/toolkit";
// 리듀서에서 데이터 직접 확인 시 current()로 감싸줘야 함

const initialState = {
  cartList: [
    {
      id: "1",
      title: "Arcsaber 11 Pro",
      count: 2,
      price: 299000,
    },
    {
      id: "3",
      title: "Aerus Z",
      count: 1,
      price: 199000,
    }
  ]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseCount: (state, { payload: id }) => {
      const target = state.cartList.find(cart => cart.id === id);
      target.count++;
    },
    decreaseCount: (state, action) => {
      const target = state.cartList.find(cart => cart.id === action.payload);
      target.count = Math.max(--target.count, 1);
    },
    addCart: (state, { payload: item }) => {
      const target = state.cartList.find(cart => cart.id === item.id);
      if (target) target.count += item.count;
      else state.cartList.push(item);
    }
  }
});

export const { increaseCount, decreaseCount, addCart } = cartSlice.actions;
export const selectCartList = state => state.cart.cartList;
export default cartSlice.reducer;