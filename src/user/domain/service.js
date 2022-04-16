const UserService = (repository) => {
  const authenticate = async (user) => repository.authenticate(user)

  const login = (user) => repository.login(user)

  const register = async (user) => repository.register(user)

  const getById = async () => repository.getById()

  const update = async (user) => repository.update(user)

  const getTransations = async () => repository.getTransactions()

  const forgotPassword = async (email) => repository.forgotPassword(email)

  const resetPassword = async (token, password) => repository.resetPassword(token, password)

  const acceptTransaction = async (id) => repository.acceptTransaction(id)

  return {
    user: repository.user,
    transactions: repository.transactions,
    authenticate,
    login,
    register,
    getById,
    getTransations,
    update,
    forgotPassword,
    resetPassword,
    acceptTransaction
  }
}

export default UserService
