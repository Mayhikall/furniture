import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProduct = createAsyncThunk('list-product/product', async () => {
  const response = await axios.get('https://course-api.com/react-store-products');
  return response.data;
});

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    status: 'idle',
    data: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProduct.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      });
  },
});

export default productSlice.reducer;
