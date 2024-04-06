import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from 'qs'
import http from "../../helper/http";

export const getAllQurban = createAsyncThunk('products', async() => {
  const results = {};
  try {
    const {data}  = await http().get('products');
    results.data = data;
    return results;
  } catch (error) {
    results.errormsg = error.response.messagge;
    return results;
  }
});

export const getOneQurban = createAsyncThunk('getOne/products', async(id) => {
  const results = {};
  try {
    const send = {id:id};
    const {data} = await http().get(`products/${id}`);
    results.data = data.result;
    return results;
  } catch (error) {
    results.errormsg = error.response.messagge;
    return results;
  }
})
