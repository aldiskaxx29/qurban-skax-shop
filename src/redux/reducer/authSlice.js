import { createSlice } from '@reduxjs/toolkit';
import { authLogin } from '../asyncAction/auth';

const initalState = {
  current: '',
  errorms: '',
  successms: '',
  loading: false,
}

const autSlice = createSlice({
  name: 'auth',
  initalState,
  reducers: {
    resetMsg: (state) => {
      state.errorms = '';
      state.successms = '';
    },

  },
  extraReducers: (build) => {
    build.addCase(authLogin.pending, (state) => {
      state.loading = true;
    }),
    build.addCase(authLogin.fulfilled, (state, action) => {
      state.current = action.payload.data;
    })
  }
})

export const {resetMsg} = autSlice.actions;
export default autSlice.reducer;
