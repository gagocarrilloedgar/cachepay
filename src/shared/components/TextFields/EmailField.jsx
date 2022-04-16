import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import reggexutil from 'shared/utils/reggex'
import Proptypes from 'prop-types'
import { TextField } from '@mui/material'

const EmailFields = ({ email, handleChange, setError, error }) => {
  const { t } = useTranslation()

  useEffect(() => {
    if (email !== '' && !email.match(reggexutil.email)) {
      setError(true)
    } else {
      setError(false)
    }
  }, [email])

  return (
    <TextField
      onChange={handleChange}
      margin="normal"
      value={email}
      required
      fullWidth
      id="email"
      label={t('email')}
      name="email"
      autoComplete="email"
      autoFocus
      error={error}
      helperText={error ? t('email_error', { ns: 'errors' }) : ''}
    />
  )
}

EmailFields.propTypes = {
  email: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
  setError: Proptypes.func.isRequired,
  error: Proptypes.bool.isRequired
}

export default EmailFields
