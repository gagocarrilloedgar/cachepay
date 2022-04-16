const COMPANY = 'company'
const USER = 'user'
const VERIFICATION = 'verification'
const PASSWORD = 'password'
const FORGOT = 'forgot'
const RESET = 'reset'
const ACCOUNT = 'account'
const LOGIN = 'login'
const REGISTER = 'register'
const ONBOARDING = 'onboarding'
const TOKENAPI = 'token'
const PAYMENT = 'payment'

export const navigation = {
  root: '/',
  verification: `/${VERIFICATION}`,
  password: `/${PASSWORD}`,
  forgotPassword: `/${PASSWORD}/${FORGOT}`,
  resetPassword: `/${PASSWORD}/${RESET}`,
  userAccount: `/${USER}/${ACCOUNT}`,
  user: `/${USER}`,
  userLogin: `/${USER}/${LOGIN}`,
  userRegister: `/${USER}/${REGISTER}`,
  userOnboarding: `/${USER}/${ONBOARDING}`,
  userPayment: `/${USER}/${PAYMENT}`,
  company: `/${COMPANY}`,
  companyAccount: `/${COMPANY}/${ACCOUNT}`,
  companyLogin: `/${COMPANY}/${LOGIN}`,
  companyRegister: `/${COMPANY}/${REGISTER}`,
  companyOnboarding: `/${COMPANY}/${ONBOARDING}`,
  companyToken: `/${COMPANY}/${TOKENAPI}`
}
