import React from 'react'
import Register from 'shared/components/Register/Register'
import { useTranslation } from 'react-i18next'
import { useSnackbar } from 'shared/components/SnackbarAlert/useSnackbar'
import SnackbarAlert from 'shared/components/SnackbarAlert/SnackbarAlert.container'
import UserRepository from 'user/infrastructure/repository'
import UserService from 'user/domain/service'
import { useNavigate } from 'react-router-dom'
import { navigation } from 'shared/lib/constants'

const UserRegister = () => {
  const { t } = useTranslation()
  const userRepository = UserRepository()
  const { register } = UserService(userRepository)
  const { handleSnackbarChange } = useSnackbar()
  const navigate = useNavigate()

  const handleSubmit = (error, data) => {
    if (error) return handleSnackbarChange(t('user_register_error'), 'error')
    register(data)
      .then(() => {
        handleSnackbarChange(t('user_register_success'), 'success')
        setTimeout(() => navigate(navigation.user), 1000)
      })
      .catch(() => handleSnackbarChange(t('user_register_error'), 'error'))
  }

  return (
    <>
      <Register title={t('user_register')} loginLink={navigation.userLogin} handleSubmit={handleSubmit} />
      <SnackbarAlert />
    </>
  )
}

export default UserRegister
