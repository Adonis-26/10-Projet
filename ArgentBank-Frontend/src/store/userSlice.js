import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  isAuthenticated: false,
  firstName: null,  
  lastName: null,  
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload
      state.isAuthenticated = true
    },
    setUserProfile: (state, action) => { 
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    },
    logout: (state) => {
      state.token = null
      state.isAuthenticated = false
      state.firstName = null
      state.lastName = null
    },
  },
})

export const { loginSuccess, setUserProfile, logout } = userSlice.actions
export default userSlice.reducer