import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state = initialState, action) => 'under construction',
  },
});

export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;