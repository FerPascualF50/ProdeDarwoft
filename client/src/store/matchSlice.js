import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getmatches = createAsyncThunk(
  'matches/getmatches',
  async () => {
    try {
      const response = await axios.get('/matches');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const matchSlice = createSlice({
  name: 'match',
  initialState: {
    matches: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getmatches.fulfilled, (state, action) => {
      if (!action.payload.success) return;
      state.matches = action.payload.response || [];
    });
  },
});

export default matchSlice.reducer;