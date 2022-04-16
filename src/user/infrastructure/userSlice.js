import { createSlice } from '@reduxjs/toolkit'
import User from 'user/domain/entity'

const initialState = {
  user: User,
  transactions: [],
  error: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    update: (state, action) => {
      state.user = action.payload
    },
    updatePassword: (state, action) => {
      state.user.password = action.payload
    },
    updateTransactions: (state, action) => {
      state.transactions = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { update, updatePassword, updateTransactions } = userSlice.actions

export default userSlice.reducer
