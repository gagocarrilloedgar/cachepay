/* eslint-disable indent */
import React, { useEffect, useMemo } from 'react'
import { TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
import reggexutil from 'shared/utils/reggex'
import Proptypes from 'prop-types'

const PasswordField = ({ handleChange, error, password, passwordConfirm, setError }) => {
  const { t } = useTranslation(['common', 'errors', 'sucess'])

  const passwordId = useMemo(() => (passwordConfirm !== undefined ? 'confirmPassword' : 'password'), [passwordConfirm])

  useEffect(() => {
    if (password !== passwordConfirm) {
      setError(true)
    } else {
      setError(false)
    }
  }, [passwordConfirm])

  useEffect(() => {
    if (password !== '' && password.match(reggexutil.password) === null) {
      setError(true)
    } else {
      setError(false)
    }
  }, [password])

  return (
    <TextField
      onChange={handleChange}
      margin="normal"
      value={passwordConfirm !== undefined ? passwordConfirm : password}
      required
      type="password"
      fullWidth
      label={passwordConfirm !== undefined ? t('confirm_password') : t('password')}
      id={passwordId}
      name={passwordId}
      autoComplete={passwordId}
      autoFocus
      error={error}
      helperText={
        !error
          ? ''
          : passwordConfirm
          ? t('password_mismatch_error', { ns: 'errors' })
          : passwordConfirm !== undefined
          ? ''
          : t('password_error', { ns: 'errors' })
      }
    />
  )
}

PasswordField.propTypes = {
  password: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
  setError: Proptypes.func.isRequired,
  error: Proptypes.bool.isRequired,
  passwordConfirm: Proptypes.string
}

export default PasswordField
