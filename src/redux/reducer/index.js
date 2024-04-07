import { combineReducers } from "@reduxjs/toolkit";
import qurbanSlice from "./qurbanSlice";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const qurbanPersistConfig = {
  key: 'qurban',
  storage
}

const persistanceQurbanReducer = persistReducer(qurbanPersistConfig, qurbanSlice);

const reducer = combineReducers({
  qurban: persistanceQurbanReducer
})

export default reducer;