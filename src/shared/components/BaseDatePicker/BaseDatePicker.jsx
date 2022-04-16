import React from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { LocalizationProvider, DatePicker } from '@mui/lab'
import { PropTypes } from 'prop-types'
import { TextField } from '@mui/material'

const BaseDatePicker = ({ handleChange, value, label }) => {
  const handleDateChange = (newValue) => {
    handleChange('birthdate', newValue)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        name="birthdate"
        value={value}
        onChange={handleDateChange}
        renderInput={(params) => <TextField required fullWidth {...params} />}
      />
    </LocalizationProvider>
  )
}

BaseDatePicker.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  label: PropTypes.string
}

export default BaseDatePicker
