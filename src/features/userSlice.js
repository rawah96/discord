import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    In: (state, action) => {
      state.user += action.payload;
    },
    out:(state) => {
      state.user = null;
    }
  },
});

export const { In, out } = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;
