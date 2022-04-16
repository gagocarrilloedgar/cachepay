import axios from 'axios'

const baseRoute = process.env.REACT_APP_API_URL + 'merchant/'

axios.create({
  baseURL: baseRoute,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true
  }
})

const routes = {
  login: 'login/',
  register: 'register/',
  forgotPassword: 'forgot-password/',
  resetPassword: 'reset-password/',
  transaction: 'transaction/',
  newToken: 'new-token/'
}

const api = {
  getById: async (id) => axios.get(baseRoute + id),
  update: async (id, company) =>
    axios.patch(baseRoute + id, company, { headers: { 'Content-Type': 'multipart/form-data' } }),
  login: async (company) => axios.post(routes.login, company),
  register: async (company) => axios.post(routes.register, company),
  forgotPassword: async (email) => axios.post(routes.forgotPassword, { email }),
  resetPassword: async (token, password) => axios.post(routes.resetPassword, { token, password }),
  getTransactions: async (id) => axios.get(routes.transaction + id),
  newToken: async (id) => axios.get(routes.newToken + id)
}

export default api
