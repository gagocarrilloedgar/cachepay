import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { useTranslation } from 'react-i18next'
import CountriesAPI from './CountriesAPI'
import { PropTypes } from 'prop-types'

const CountrySelect = ({ countryData, setCountryData, handleChange }) => {
  const { t } = useTranslation()
  const { fetchCountries } = CountriesAPI()
  const [countries, setCountries] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    fetchCountries().then((res) => {
      setCountries(res)
    })
  }, [])

  return (
    <Autocomplete
      id="country-select"
      fullWidth
      name="country"
      options={countries}
      value={countryData}
      onChange={(_event, newValue) => {
        setCountryData(newValue)
      }}
      inputValue={inputValue}
      onInputChange={(_event, newValue) => {
        setInputValue(newValue)
        if (newValue !== '') {
          handleChange('country', newValue)
        }
      }}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField required {...params} label={t('Choose a country')} />}
    />
  )
}

CountrySelect.propTypes = {
  countryData: PropTypes.object.isRequired,
  setCountryData: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default CountrySelect
