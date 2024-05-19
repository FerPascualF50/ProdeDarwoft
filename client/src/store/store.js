import { configureStore } from '@reduxjs/toolkit'
import countrySlice from './countrySlice'
import matchSlice from './matchSlice'

export const store = configureStore({
   reducer: { 
      country: countrySlice,
      match: matchSlice,
   }
});