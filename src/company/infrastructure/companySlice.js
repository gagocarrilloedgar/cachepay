import { createSlice } from '@reduxjs/toolkit'
import CompanyEntity from 'company/domain/entity'

export const companySlice = createSlice({
  name: 'company',
  initialState: {
    company: CompanyEntity,
    transactions: []
  },
  reducers: {
    update: (state, action) => {
      state.company = action.payload
    },
    updatePassword: (state, action) => {
      state.company.password = action.payload
    },
    updateToken: (state, action) => {
      state.company.token = action.payload
    },
    updateTransactions: (state, action) => {
      state.transactions = action.payload
    }
  }
})

export const { update, updatePassword, updateToken, updateTransactions, setEmailPassword } = companySlice.actions

export default companySlice.reducer
