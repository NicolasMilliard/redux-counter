import { createSlice } from "@reduxjs/toolkit";

// Creating a slice of the Redux store with createSlice
export const counterSlice = createSlice({
  name: "counter", // The name of the slice
  initialState: {
    value: 0, // The initial state of the slice
  },
  reducers: {
    // The reducers are functions that modify the state of the slice
    increment: (state) => {
      // The increment function modifies the value property of the state by adding 1 to it
      state.value += 1;
    },
    decrement: (state) => {
      // The decrement function modifies the value property of the state by subtracting 1 from it
      state.value -= 1;
    },
  },
});

// Exporting the increment and the decrement actions created by counterSlice
export const { increment, decrement } = counterSlice.actions;

// Exporting the reducer created by createSlice
export default counterSlice.reducer;
