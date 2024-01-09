import { createSlice } from "@reduxjs/toolkit";

export const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState: {
    value: 0,
    flavor: "Rocky Road",
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
    changeFlavor: (state, action) => {
      state.flavor = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  resetIceCream,
  changeFlavor,
} = iceCreamSlice.actions;

export default iceCreamSlice.reducer;
