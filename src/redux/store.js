import { configureStore } from "@reduxjs/toolkit";
import qurbanSlice from "./reducer/qurbanSlice";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: {
    qurban: qurbanSlice,
    middleware: [thunk,logger]
  }
})

export default store;