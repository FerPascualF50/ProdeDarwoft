import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const validateLogin = createAsyncThunk(
  'auth/validateLogin',
  async () => {
    try {
      const access_token = localStorage.getItem('access_token')
      const response = await axios.get('/auth/check-token', { headers: { Authorization: access_token } });
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
);
export const logoutGoogle = createAsyncThunk(
  'auth/logoutGoogle',
  async () => {
    try {
      const access_token = localStorage.getItem('access_token')
      const response = await axios.get('/auth/logout',
        { headers: { Authorization: access_token } }
      );
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(validateLogin.fulfilled, (state, action) => {
      state.user = action.payload.response
    }),
      builder.addCase(logoutGoogle.fulfilled, (state) => {
        state.user = null
        localStorage.removeItem('access_token')
      })
  }
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
