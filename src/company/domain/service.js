const CompanyService = (repository) => {
  const authenticate = async (user) => repository.authenticate(user)

  const login = (company) => repository.login(company)

  const register = async (company) => repository.register(company)

  const getById = async () => repository.getById()

  const update = async (company) => repository.updateById(company)

  const getTransations = async () => repository.getTransations()

  const newToken = async () => repository.newToken()

  const forgotPassword = async (email) => repository.forgotPassword(email)

  const resetPassword = async (token, password) => repository.resetPassword(token, password)

  return {
    company: repository.company,
    transactions: repository.transactions,
    authenticate,
    login,
    register,
    getById,
    update,
    getTransations,
    newToken,
    forgotPassword,
    resetPassword
  }
}

export default CompanyService
