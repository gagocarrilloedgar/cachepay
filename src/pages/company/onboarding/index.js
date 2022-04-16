/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/system'
import { Card, CardContent, CardHeader, Container, CardActions, Button } from '@mui/material'
import Location from 'shared/components/Location/Location'
import CompanyInfo from 'company/application/CompanyInfo/CompanyInfo'
import FinancialInfo from 'company/application/FinancialInfo/FinancialInfo'
import CompanyService from 'company/domain/service'
import CompanyRepository from 'company/infrastructure/repository'
import SnackbarAlert from 'shared/components/SnackbarAlert/SnackbarAlert.container'
import { useSnackbar } from 'shared/components/SnackbarAlert/useSnackbar'
import { useNavigate } from 'react-router-dom'
import { navigation } from 'shared/lib/constants'

const initialState = {
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

const CompanyOnboarding = () => {
  const { t } = useTranslation()

  const [formData, setFormData] = useState(initialState)

  const { handleSnackbarChange } = useSnackbar()
  const navigate = useNavigate()

  const companyRepository = CompanyRepository()
  const { update } = CompanyService(companyRepository)

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (error) => {
    if (error) return handleSnackbarChange(t('company_onboarding_error'), 'error')
    const data = new FormData()
    Object.keys(formData).map((key) => data.append(key, formData[key]))
    const res = await update(data)
    if (!res) return handleSnackbarChange(t('company_onboarding_error'), 'error')
    handleSnackbarChange(t('company_onboarding_success'), 'success')
    setTimeout(() => {
      navigate(navigation.company)
    }, 3000)
  }

  return (
    <Container maxWidth="md">
      <Box
        component="form"
        sx={{
          marginTop: 4,
          flexDirection: 'column',
          justifyContent: 'center',
          display: 'flex'
        }}
        onSubmit={handleSubmit}
        minHeight="100vh"
      >
        <Card variant="outlined">
          <CardHeader title={t('onboarding_user_title')} subheader={t('onboarding_user_subtitle')} />
          <CardContent>
            <CompanyInfo personalData={formData} handleFormData={handleChange} />
            <Location locationInfo={formData} handleChange={handleChange} />
            <FinancialInfo walletInfo={formData} handleChange={handleChange} />
          </CardContent>
          <CardActions>
            <Button type="submit" variant="contained" color="primary">
              {t('onboarding_user_button')}
            </Button>
          </CardActions>
        </Card>
      </Box>
      <SnackbarAlert />
    </Container>
  )
}

export default CompanyOnboarding
