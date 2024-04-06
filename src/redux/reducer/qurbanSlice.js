import { createSlice } from "@reduxjs/toolkit";
import {qurbanData} from "../../data/qurban";
import { getAllQurban, getOneQurban } from "../asyncAction/qurban";

const initialState = {
  current: '',
  errormsg: '',
  successmsg: '',
  list: [],
  loading: false,
}

const qurbanSlice = createSlice({
  name: "qurban",
  initialState,
  reducers: {
    resetMsg: (state) => {
      state.errormsg = '';
      state.successmsg = ''
    }
  },
  extraReducers: (build) => {
    build.addCase(getAllQurban.pending, (state) => {
      state.loading = true;
      state.list = [];
    }),
    build.addCase(getAllQurban.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    })
  }
})

export const {resetMsg} = qurbanSlice.actions;
export default qurbanSlice.reducer;