import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "showData",
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
