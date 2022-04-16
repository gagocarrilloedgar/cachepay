/* eslint-disable multiline-ternary */
import React from 'react'
import NameField from 'shared/components/TextFields/NameField'
import PropTypes from 'prop-types'
import DataFromLayout from 'shared/components/DatFormLayout/DataFormLayout'

const LocationInfoView = ({ locationTypes, error, handleError, handleChange, locationInfo }) => {
  const InputTypes = {
    text: ({ label = '', type = '' }) => (
      <NameField
        labelError={'zip_error'}
        error={error[label]}
        setError={handleError}
        label={label}
        type={type}
        value={locationInfo[label]}
        handleChange={handleChange}
      />
    )
  }

  return <DataFromLayout componentData={InputTypes} mappingData={locationTypes} title="location_info" />
}

LocationInfoView.propTypes = {
  handleChange: PropTypes.func.isRequired,
  locationInfo: PropTypes.object.isRequired,
  locationTypes: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  handleError: PropTypes.func.isRequired
}

export default LocationInfoView
