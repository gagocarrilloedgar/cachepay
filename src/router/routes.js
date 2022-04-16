import React from 'react'
import Welcome from 'pages'
import Verification from 'pages/verification'
import { ForgotPassword, ResetPassword } from 'pages/password'
import { UserAccount, UserLogin, UserOnboarding, UserRegister, UserDashboard } from 'pages/user'
import { CompanyAccount, CompanyDashboard, CompanyLogin, CompanyRegister, CompanyOnboarding } from 'pages/company'
import { navigation } from 'shared/lib/constants'
import PaymentConfirmation from 'pages/user/payment'
import CompanyToken from 'pages/company/token'

const {
  root,
  verification,
  password,
  resetPassword,
  forgotPassword,
  user,
  userLogin,
  userRegister,
  userAccount,
  userOnboarding,
  userPayment,
  company,
  companyAccount,
  companyLogin,
  companyRegister,
  companyOnboarding,
  companyToken
} = navigation

const routes = [
  {
    path: root,
    children: [
      { index: true, element: <Welcome /> },
      { path: verification, element: <Verification /> },
      {
        path: password,
        children: [
          { path: forgotPassword, element: <ForgotPassword /> },
          { path: resetPassword, element: <ResetPassword /> }
        ]
      },
      {
        path: user,
        children: [
          { index: true, element: <UserDashboard /> },
          { path: userLogin, element: <UserLogin /> },
          { path: userRegister, element: <UserRegister /> },
          { path: userAccount, element: <UserAccount /> },
          { path: userOnboarding, element: <UserOnboarding /> },
          { path: userPayment, element: <PaymentConfirmation /> }
        ]
      },
      {
        path: company,
        children: [
          { index: true, element: <CompanyDashboard /> },
          { path: companyLogin, element: <CompanyLogin /> },
          { path: companyRegister, element: <CompanyRegister /> },
          { path: companyAccount, element: <CompanyAccount /> },
          { path: companyOnboarding, element: <CompanyOnboarding /> },
          { path: companyToken, element: <CompanyToken /> }
        ]
      }
    ]
  }
]

export default routes
