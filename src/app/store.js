import { configureStore } from "@reduxjs/toolkit";
import pie from "../feature/pies/piesSlice";
import iceCream from "../feature/iceCream/iceCreamSlice";

export const store = configureStore({
  reducer: {
    pie,
    iceCream,
  },
});
