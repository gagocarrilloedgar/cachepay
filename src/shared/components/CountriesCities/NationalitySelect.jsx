import React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { useTranslation } from 'react-i18next'
import nationalities from './nationalities'
import PropTypes from 'prop-types'

const NationalitySelect = ({ handleChange, nationality }) => {
  const { t } = useTranslation()

  return (
    <Autocomplete
      id="country-select"
      name="nationality"
      fullWidth
      options={nationalities}
      autoHighlight
      value={nationality}
      onChange={(_event, newValue) => {
        handleChange('nationality', newValue)
      }}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField
        required
          {...params}
          label={t('Choose a nationaliy')}
          inputProps={{
            ...params.inputProps
          }}
        />
      )}
    />
  )
}

NationalitySelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  nationality: PropTypes.string.isRequired
}

export default NationalitySelect
