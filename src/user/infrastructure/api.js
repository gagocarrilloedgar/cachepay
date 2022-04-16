import axios from 'axios'

const baseRoute = process.env.REACT_APP_API_URL + 'user/'

const routes = {
  login: `${baseRoute}login`,
  register: 'register/',
  forgotPassword: 'forgot-password/',
  resetPassword: 'reset-password/',
  transactions: 'transactions/',
  acceptTransaction: 'accept-transaction/'
}

const api = {
  getById: async (id) => axios.get(baseRoute + id),
  update: async (id, user) => axios.patch(baseRoute + id, user),
  login: async (user) => axios.post(routes.login, user),
  register: async (user) => axios.post(routes.register, user),
  forgotPassword: async (email) => axios.post(routes.forgotPassword, { email }),
  resetPasword: async (token, password) => axios.post(routes.resetPassword, { token, password }),
  getTransactions: async (id) => axios.get(routes.transactions + id),
  acceptTransaction: async (id) => axios.get(routes.acceptTransaction + id)
}

export default api
