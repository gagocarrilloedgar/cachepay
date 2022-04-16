import CompanyService from 'company/domain/service'
import CompanyRepository from 'company/infrastructure/repository'
import React from 'react'
import Login from 'shared/components/Login/Login'
import { useSnackbar } from 'shared/components/SnackbarAlert/useSnackbar'
import SnackbarAlert from 'shared/components/SnackbarAlert/SnackbarAlert.container'
import { navigation } from 'shared/lib/constants'
import { useTranslation } from 'react-i18next'

const CompanyLogin = () => {
  const companyRepository = CompanyRepository()
  const { login } = CompanyService(companyRepository)
  const { t } = useTranslation()

  const { handleSnackbarChange } = useSnackbar()

  const handleSubmit = async (error, data) => {
    if (error) return handleSnackbarChange(t('company_login_error'), 'error')
    const res = await login(data)
    if (!res) return handleSnackbarChange(t('company_login_error'), 'error')
    handleSnackbarChange(t('company_login_success'), 'success')
  }

  return (
    <>
      <Login
        forgotPasswordLink={navigation.forgotPassword + '?type=company'}
        registerLink={navigation.companyRegister}
        handleSubmit={handleSubmit}
      />
      <SnackbarAlert />
    </>
  )
}

export default CompanyLogin
