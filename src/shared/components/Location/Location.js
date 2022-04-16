/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import LocationInfoView from './LocationInfoView.jsx'
import PropTypes from 'prop-types'

const locationTypes = [
  { type: 'text', label: 'postal_code' },
  { type: 'text', label: 'adress' }
]

const LocationInfo = ({ handleChange, locationInfo }) => {
  const [error, setError] = useState({
    postal_code: false,
    adress: false
  })

  const handleError = (name, value) => {
    setError({ ...error, [name]: value })
  }

  return (
    <LocationInfoView
      locationTypes={locationTypes}
      error={error}
      handleError={handleError}
      handleChange={handleChange}
      locationInfo={locationInfo}
    />
  )
}
LocationInfo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  locationInfo: PropTypes.object.isRequired
}

export default LocationInfo
