import { configureStore } from "@reduxjs/toolkit";
import counterActions from "../features/counterSlice";
import ourtNameActions from "../features/nameSlice";
export const store = configureStore({
  reducer: {
    storeData: counterActions.reducer,
    ourNamess: ourtNameActions.reducer,
  },
});
