import { configureStore } from '@reduxjs/toolkit';
import loginGoogleSlice from './loginGoogleSlice';
import countrySlice from './countrySlice';
import matchSlice from './matchSlice';

export const store = configureStore({
   reducer: { 
      auth: loginGoogleSlice,
      country: countrySlice,
      match: matchSlice,
   }
});