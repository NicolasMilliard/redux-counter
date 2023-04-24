import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

// Created the store with the combined reducer
export default configureStore({
  reducer: {
    counter: counterSlice,
  },
});
