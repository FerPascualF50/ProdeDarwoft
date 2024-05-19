import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getCountries = createAsyncThunk(
  'countries/getCoutries',
  async () => {
    try {
      const response = await axios.get('/countries/');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const countrySlice = createSlice({
  name: 'country',
  initialState: {
    countries: [],
    groupedCountries: {
      A: [],
      B: [],
      C: [],
      D: [],
    },
  },
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(getCountries.fulfilled, (state, action) => {
        if (!action.payload.success) return;
        state.countries = action.payload.response || [];
        state.groupedCountries = action.payload.response.reduce((acc, country) => {
          acc[country.group].push(country);
          return acc;
        }, { A: [], B: [], C: [], D: [] });
      })
  }
});

export default countrySlice.reducer;