import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, Container, CardActions, Button } from '@mui/material'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom'

import Location from 'shared/components/Location/Location'
import PersonalInfo from 'user/application/Personalnfo/Personalnfo'
import WalletInfo from 'user/application/WalletInfo/WalletInfo'
import { useSnackbar } from 'shared/components/SnackbarAlert/useSnackbar'
import SnackbarAlert from 'shared/components/SnackbarAlert/SnackbarAlert.container'
import UserRepository from 'user/infrastructure/repository'
import UserService from 'user/domain/service'
import { navigation } from 'shared/lib/constants'

const UserOnboarding = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    birthdate: '',
    phone_number: '',
    nationality: '',
    country: '',
    city: '',
    adress: '',
    postal_code: '',
    wallet_number: '',
    social_security: ''
  })

  const userRepository = UserRepository()
  const { update } = UserService(userRepository)

  const { handleSnackbarChange } = useSnackbar()
  const navigate = useNavigate()

  const { t } = useTranslation()
  const title = t('onboarding_user_title')
  const subtitle = t('onboarding_user_subtitle')

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (error) => {
    if (error) return handleSnackbarChange(t('user_onboarding_error'), 'error')
    const res = await update(formData)
    if (!res) return handleSnackbarChange(t('user_onboarding_error'), 'error')
    handleSnackbarChange(t('user_onboarding_success'), 'success')
    setTimeout(() => {
      navigate(navigation.user)
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
          <CardHeader title={title} subheader={subtitle} />
          <CardContent>
            <PersonalInfo personalData={formData} handleFormData={handleChange} />
            <Location locationInfo={formData} handleChange={handleChange} />
            <WalletInfo formData={formData} handleChange={handleChange} />
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

export default UserOnboarding
