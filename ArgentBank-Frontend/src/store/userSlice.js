import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  isAuthenticated: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.token = null
      state.isAuthenticated = false
    },
  },
})

export const { loginSuccess, logout } = userSlice.actions
export default userSlice.reducer