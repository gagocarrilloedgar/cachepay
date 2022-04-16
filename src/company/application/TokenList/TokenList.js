import React from 'react'
import TokenListContainer from './TokenListContainer'
import CompanyRepository from 'company/infrastructure/repository'
import CompanyService from 'company/domain/service'
import { useSnackbar } from 'shared/components/SnackbarAlert/useSnackbar'
import SnackbarAlert from 'shared/components/SnackbarAlert/SnackbarAlert.container'
import { useTranslation } from 'react-i18next'

const TokenList = () => {
  const companyRepository = CompanyRepository()
  const { newToken, company } = CompanyService(companyRepository)

  const { handleSnackbarChange } = useSnackbar()
  const { t } = useTranslation()

  const generateToken = () =>
    newToken()
      .then(() => window.location.reload())
      .catch(() => handleSnackbarChange(t('new_token_error', { ns: 'errors' }), 'error'))

  return (
    <>
      <TokenListContainer generateToken={generateToken} token={company?.token} />
      <SnackbarAlert />
    </>
  )
}

export default TokenList
