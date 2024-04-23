import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from 'qs';
import http from "../../helper/http";

export const authLogin = createAsyncThunk('auth/login', async(request) => {
  const results = {};
  try {
    const send = qs.stringify(request);
    const {data} = await http().post('auth/login', send, {headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }});
    results.data = data.data;
    return results;
  } catch (error) {
    results.errorms = error.response.messae;
    return results;
  }
})