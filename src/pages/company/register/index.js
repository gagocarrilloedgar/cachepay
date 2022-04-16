import CompanyService from 'company/domain/service'
import CompanyRepository from 'company/infrastructure/repository'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Register from 'shared/components/Register/Register'
import SnackbarAlert from 'shared/components/SnackbarAlert/SnackbarAlert.container'
import { useSnackbar } from 'shared/components/SnackbarAlert/useSnackbar'
import { navigation } from 'shared/lib/constants'
import { useNavigate } from 'react-router-dom'

const CompanyRegister = () => {
  const companyRepository = CompanyRepository()
  const { register } = CompanyService(companyRepository)
  const { t } = useTranslation()
  const { handleSnackbarChange } = useSnackbar()
  const navigate = useNavigate()

  const handleSubmit = (error, data) => {
    if (error) return handleSnackbarChange(t('company_register_error'), 'error')
    register(data)
      .then(() => {
        handleSnackbarChange(t('company_register_success'), 'success')
        setTimeout(() => navigate(navigation.company), 1000)
      })
      .catch(() => handleSnackbarChange(t('company_register_error'), 'error'))
  }

  return (
    <>
      <Register loginLink={navigation.companyLogin} handleSubmit={handleSubmit} />
      <SnackbarAlert />
    </>
  )
}

export default CompanyRegister
