import React, { createRef, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import MessageAlert from 'shared/components/MessageAlert/MessageAlert'
import CompanyLayout from 'company/application/Layout/Layout'
import CompanyInfo from 'company/application/CompanyInfo/CompanyInfo'
import FinancialInfo from 'company/application/FinancialInfo/FinancialInfo'
import Location from 'shared/components/Location/Location'
import CompanyService from 'company/domain/service'
import CompanyRepository from 'company/infrastructure/repository'
import SnackbarAlert from 'shared/components/SnackbarAlert/SnackbarAlert.container'
import { useSnackbar } from 'shared/components/SnackbarAlert/useSnackbar'
import ForgotPasswordButton from 'shared/components/ForgotPassword/ForgotPassword'

const InitState = {
  company_name: '',
  logo: [],
  phone_number: '',
  country: '',
  city: '',
  adress: '',
  postal_code: '',
  iban: '',
  wallet_number: '',
  company_number: ''
}

const CompanyAccount = () => {
  const { t } = useTranslation(['user'])

  const { handleSnackbarChange } = useSnackbar()
  const companyRepository = CompanyRepository()
  const { update, company } = CompanyService(companyRepository)

  const titleRef = createRef()
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState(InitState)

  useEffect(() => setFormData(company), [company])

  useEffect(() => {
    if (formData === InitState) setOpen(false)
  }, [formData])

  const handleChange = (name, value) => {
    if (formData === InitState) return false
    setFormData({ ...formData, [name]: value })
    setOpen(true)
  }

  const cancelChanges = () => {
    titleRef.current.focus()
    setFormData(InitState)
    setOpen(false)
  }

  const saveChange = async () => {
    const data = new FormData()
    Object.keys(formData).map((key) => data.append(key, formData[key]))
    update(data)
      .then(() => {
        handleSnackbarChange(t('company_update_success'), 'success')
        setOpen(false)
      })
      .catch(() => handleSnackbarChange(t('company_update_error'), 'error'))
  }

  return (
    <CompanyLayout>
      <h1 ref={titleRef}>{t('settings')}</h1>
      <p>{t('settings_subtitle')}</p>
      <MessageAlert open={open} title={t('unsaved_changes')} variant="outlined" save={saveChange} cancel={cancelChanges} />
      <CompanyInfo personalData={formData} handleFormData={handleChange} />
      <Location locationInfo={formData} handleChange={handleChange} />
      <FinancialInfo walletInfo={formData} handleChange={handleChange} />
      <ForgotPasswordButton type="company" />
      <SnackbarAlert />
    </CompanyLayout>
  )
}

export default CompanyAccount
