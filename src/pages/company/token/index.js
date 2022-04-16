import React from 'react'
import CompanyLayout from 'company/application/Layout/Layout'
import TokenList from 'company/application/TokenList/TokenList'
import { useTranslation } from 'react-i18next'

const CompanyToken = () => {
  const { t } = useTranslation()
  return (
    <CompanyLayout>
      <h1>{t('token_title')}</h1>
      <p>{t('token_subtitle')}</p>
      <TokenList />
    </CompanyLayout>
  )
}

export default CompanyToken
