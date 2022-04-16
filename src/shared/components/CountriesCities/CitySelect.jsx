import React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { useTranslation } from 'react-i18next'
import { PropTypes } from 'prop-types'

const CitySelect = ({ cities, city, handleChange }) => {
  const { t } = useTranslation()

  return (
    <Autocomplete
      id="city-select"
      fullWidth
      options={cities || []}
      autoHighlight
      value={city}
      onChange={(_event, newValue) => {
        handleChange('city', newValue)
      }}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField
          fullWidth
          {...params}
          required
          label={t('Choose a city')}
          inputProps={{
            ...params.inputProps
          }}
        />
      )}
    />
  )
}

CitySelect.propTypes = {
  cities: PropTypes.array.isRequired,
  city: PropTypes.string,
  handleChange: PropTypes.func.isRequired
}

export default CitySelect
