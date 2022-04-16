import React from 'react'
import { useTranslation } from 'react-i18next'
import Login from 'shared/components/Login/Login.jsx'
import SnackbarAlert from 'shared/components/SnackbarAlert/SnackbarAlert.container'
import { useSnackbar } from 'shared/components/SnackbarAlert/useSnackbar'
import { navigation } from 'shared/lib/constants'
import UserService from 'user/domain/service'
import UserRepository from 'user/infrastructure/repository'

const UserLogin = () => {
  const userRepository = UserRepository()
  const { login } = UserService(userRepository)
  const { t } = useTranslation()

  const { handleSnackbarChange } = useSnackbar()

  const handleSubmit = async (error, data) => {
    if (error) return handleSnackbarChange(t('user_login_error'), 'error')
    const res = await login(data)
    if (!res) return handleSnackbarChange(t('user_login_error'), 'error')
    handleSnackbarChange(t('user_login_success'), 'success')
  }

  return (
    <>
      <Login
        actionText={t('login_text')}
        forgotPasswordLink={navigation.forgotPassword + '?type=user'}
        registerLink={navigation.userRegister}
        handleSubmit={handleSubmit}
      />
      <SnackbarAlert />
    </>
  )
}

export default UserLogin
