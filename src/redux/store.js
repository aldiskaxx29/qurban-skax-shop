import { configureStore } from "@reduxjs/toolkit";
import qurbanSlice from "./reducer/qurbanSlice";

const store = configureStore({
  reducer: {
    qurban: qurbanSlice,
  }
})

export default store;