import api from './api'
import { useDispatch, useSelector } from 'react-redux'
import { update, updateToken, updatePassword, updateTransactions } from './companySlice'

const CompanyRepository = () => {
  const dispatch = useDispatch()
  const companyStore = useSelector((state) => state.company.company)
  const transactionsStore = useSelector((state) => state.company.transactions)
  const id = companyStore.id || ''

  const login = async (company) => {
    const resp = await api.login(company)
    if (resp.status !== 200 || resp.status !== 201) return false
    dispatch(update(resp.data))
    return true
  }

  const register = async (company) => {
    const resp = await api.register(company)
    if (resp.status !== 200 || resp.status !== 201) return false
    dispatch(update(resp.data))
    return true
  }

  const getById = async () => {
    const resp = await api.getById(id)
    if (resp.status !== 200 || resp.status !== 201) return false
    dispatch(update(resp.data))
    return true
  }

  const updateById = async (company) => {
    const resp = await api.update(id, company)
    if (resp.status !== 200 || resp.status !== 201) return false
    dispatch(update(resp.data))
    return true
  }

  const newToken = async () => {
    const resp = await api.newToken(id)
    if (resp.status !== 200 || resp.status !== 201) return false
    dispatch(updateToken(resp.data))
    return true
  }

  const forgotPassword = async (email) => {
    const resp = await api.forgotPassword(email)
    if (resp.status !== 200 || resp.status !== 201) return false
    return true
  }

  const resetPassword = async (token, password) => {
    const resp = await api.resetPassword(token, password)
    if (resp.status !== 200 || resp.status !== 201) return false
    dispatch(updatePassword(password))
    return true
  }

  const getTransactions = async () => {
    const resp = await api.getTransactions(id)
    if (resp.status !== 200 || resp.status !== 201) return false
    dispatch(updateTransactions(resp.data))
    return true
  }

  return {
    company: companyStore,
    transactions: transactionsStore,
    login,
    register,
    getById,
    updateById,
    newToken,
    forgotPassword,
    resetPassword,
    getTransactions
  }
}

export default CompanyRepository
