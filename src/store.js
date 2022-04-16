import { configureStore } from '@reduxjs/toolkit'
import companyReducer from 'company/infrastructure/companySlice'
import userReducer from 'user/infrastructure/userSlice'
export default configureStore({
  reducer: {
    company: companyReducer,
    user: userReducer
  }
})
