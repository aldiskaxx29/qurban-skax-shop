import { createSlice } from "@reduxjs/toolkit";
import {qurbanData} from "../../data/qurban";

const initialState = {
  current: '',
  list: qurbanData,
  loading: false,
}

const qurbanSlice = createSlice({
  name: "qurban",
  initialState,
  reducers: {
    addQurban: (state, action) => {
      state.list.push(action.payload);
    },

    deleteQurban: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload.id);
    },

    updateQurban: (state, action) => {
      state.list.map(item => {
        if(item.id == action.payload.id){
          item.username = action.payload.username;
        }
      })
    }
  }
})

export const {addQurban, deleteQurban, updateQurban} = qurbanSlice.actions;
export default qurbanSlice.reducer;