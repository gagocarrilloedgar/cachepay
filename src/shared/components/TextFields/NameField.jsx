import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import reggexutil from 'shared/utils/reggex'
import Proptypes from 'prop-types'
import { TextField } from '@mui/material'

const NameField = ({ value, label, labelError, handleChange, setError, error }) => {
  const { t } = useTranslation()

  useEffect(() => {
    if (value !== '' && !value?.match(reggexutil[label])) {
      setError(label, true)
    } else {
      setError(label, false)
    }
  }, [value])

  return (
    <TextField
      onChange={(e) => handleChange(label, e.target.value)}
      value={value}
      required
      fullWidth
      id={label}
      label={t(label)}
      name={label}
      error={error}
      helperText={error ? t(labelError, { ns: 'errors' }) : ''}
    />
  )
}

NameField.propTypes = {
  value: Proptypes.string,
  handleChange: Proptypes.func.isRequired,
  setError: Proptypes.func.isRequired,
  error: Proptypes.bool,
  labelError: Proptypes.string.isRequired,
  label: Proptypes.string
}

export default NameField
