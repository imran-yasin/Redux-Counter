import { createSlice } from "@reduxjs/toolkit";

const ourName = createSlice({
  name: "names",
  initialState: {},
  reducers: {
    myName(state) {
      state.value = "imran Yasin";
    },
    yourName(state) {
      state.value = "Mani";
    },
    hideName(state) {
      state.value = null;
    },
    firstName(state) {
      state.value = 10;
    },
  },
});

export const ourNameActions = ourName.actions;
export default ourName;
