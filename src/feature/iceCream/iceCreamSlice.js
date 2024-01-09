import { createSlice } from "@reduxjs/toolkit";

export const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    resetIceCream: (state) => {
      state.value = 0;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  resetIceCream,
} = iceCreamSlice.actions;

export default iceCreamSlice.reducer;
