import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { persistStore } from "redux-persist";
import reducer from './reducer/index';

export const store = configureStore({
  reducer,
  // middleware: [thunk, logger]
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
})

export const persistor = persistStore(store);
// export default store;