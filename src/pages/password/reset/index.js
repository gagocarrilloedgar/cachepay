import React, { useMemo, useState } from 'react'
import { Container, Box, Typography, CardContent, CardActions, Button } from '@mui/material'
import Proptypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import PasswordField from 'shared/components/TextFields/Password'

import UserRepository from 'user/infrastructure/repository'
import UserService from 'user/domain/service'
import CompanyService from 'company/domain/service'
import CompanyRepository from 'company/infrastructure/repository'

import { useSearchParams } from 'react-router-dom'
import { useSnackbar } from 'shared/components/SnackbarAlert/useSnackbar'
import SnackbarAlert from 'shared/components/SnackbarAlert/SnackbarAlert.container'

const ResetPassword = () => {
  const { t } = useTranslation(['common', 'errors', 'sucess'])
  const [passwords, setPasswords] = useState({
    password: '',
    confirmPassword: ''
  })

  const [passwordError, setPasswordError] = useState(false)
  const [passwordConfirmError, setPasswordConfirmError] = useState(false)

  const [searchParams] = useSearchParams()

  const userRepository = UserRepository()
  const userSerivce = UserService(userRepository)

  const companyRepository = CompanyRepository()
  const companyService = CompanyService(companyRepository)

  const { handleSnackbarChange } = useSnackbar()

  const type = useMemo(() => searchParams.get('type'), [searchParams])

  const handleChange = (e) => {
    const { name, value } = e.target
    setPasswords({
      ...passwords,
      [name]: value
    })
  }

  const onSubmit = async () => {
    if (passwordConfirmError && passwords.password === '') {
      setPasswordError(true)
      return setPasswordConfirmError(true)
    }
    const resp =
      type === 'user'
        ? await userSerivce.resetPassword(passwords.password)
        : await companyService.resetPassword(passwords.password)

    if (resp) return handleSnackbarChange(t('reset_password_success', { ns: 'sucess' }), 'success')
    handleSnackbarChange(t('reset_password_error', { ns: 'error' }), 'error')
  }

  return (
    <Container maxWidth="sm">
      <Box
        style={{
          textAlign: 'left',
          flexDirection: 'column',
          justifyContent: 'center',
          display: 'flex'
        }}
        minHeight="100vh"
      >
        <CardContent>
          <Typography component="h3" style={{ fontWeight: 800 }} variant="h5" gutterBottom>
            {t('reset_password_title')}
          </Typography>
          <Typography>{t('reset_password_subtitle')}</Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <PasswordField
              error={passwordError}
              password={passwords.password}
              setError={setPasswordError}
              handleChange={handleChange}
            />
            <PasswordField
              error={passwordConfirmError}
              passwordConfirm={passwords.confirmPassword}
              password={passwords.password}
              setError={setPasswordConfirmError}
              handleChange={handleChange}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="outlined" onClick={onSubmit}>
            {t('reset_password_button')}
          </Button>
        </CardActions>
      </Box>
      <SnackbarAlert />
    </Container>
  )
}

ResetPassword.propTypes = {
  title: Proptypes.string
}

ResetPassword.defaultProps = {
  title: 'Forgot Password'
}

export default ResetPassword
