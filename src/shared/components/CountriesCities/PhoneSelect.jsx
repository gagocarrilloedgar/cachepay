import React, { useEffect, useState } from 'react'
import { Autocomplete, TextField, Box, Typography } from '@mui/material'
import CountriesAPI from './CountriesAPI'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import reggexutil from 'shared/utils/reggex'

const PhoneSelect = ({ error, setError, number, setNumber }) => {
  const { t } = useTranslation()
  const { fetchCodes } = CountriesAPI()
  const [codes, setCodes] = useState([])

  useEffect(() => {
    fetchCodes().then((res) => {
      setCodes(res)
    })
  }, [])

  useEffect(() => {
    if (number.number !== '' && !number.number.match(reggexutil.phone_number)) {
      setError('phone_number', true)
    } else {
      setError('phone_number', false)
    }
  }, [number.number])

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <Autocomplete
          sx={{ width: '40%', marginRight: '1rem' }}
          id="dial_code"
          name="dial_code"
          options={codes}
          value={number.code}
          getOptionLabel={(option) => option}
          onChange={(_event, newValue) => {
            setNumber({ ...number, code: newValue })
          }}
          renderInput={(params, index) => (
            <TextField
              required
              label={t('Country code')}
              key={index}
              {...params}
              inputProps={{
                ...params.inputProps
              }}
            />
          )}
        />
        <TextField
          required
          fullWidth
          id="phone"
          variant="outlined"
          name="phone"
          label={t('phone')}
          error={error}
          value={number.number}
          onChange={(e) => setNumber({ ...number, number: e.target.value })}
        />
      </Box>
      <Typography color="error">{error ? t('phone_error', { ns: 'errors' }) : ''}</Typography>
    </>
  )
}

PhoneSelect.propTypes = {
  error: PropTypes.bool.isRequired,
  setError: PropTypes.func.isRequired,
  number: PropTypes.object,
  setNumber: PropTypes.func.isRequired
}

export default PhoneSelect
