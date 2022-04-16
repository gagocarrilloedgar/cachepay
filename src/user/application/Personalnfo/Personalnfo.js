/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react'
import PersonInfoView from './Personalnfo.jsx'
import PropTypes from 'prop-types'

const personalInfo = [
  { type: 'text', label: 'first_name' },
  { type: 'text', label: 'last_name' },
  { type: 'date', label: 'birthdate' },
  { type: 'phone', label: 'phone_number' },
  { type: 'nationality', label: 'nationality' },
  { type: 'country', label: 'country' },
  { type: 'city', label: 'city' }
]

const PersonalInfo = ({ handleFormData, personalData }) => {
  const [countryData, setCountryData] = useState({ name: '', cities: [] })
  const [number, setNumber] = useState({ code: '', number: '' })
  const [error, setError] = useState({
    first_name: false,
    last_name: false,
    phone_number: false
  })

  useEffect(() => {
    if (number.code !== '' || number.number !== '') {
      handleFormData('phone_number', number.code + number.number)
    }
  }, [number])

  const handleError = (name, value) => {
    setError({ ...error, [name]: value })
  }

  return (
    <PersonInfoView
      personalInfo={personalInfo}
      countryData={countryData}
      personalData={personalData}
      error={error}
      number={number}
      handleFormData={handleFormData}
      setCountryData={setCountryData}
      handleError={handleError}
      setNumber={setNumber}
    />
  )
}

PersonalInfo.propTypes = {
  handleFormData: PropTypes.func.isRequired,
  personalData: PropTypes.object.isRequired
}

export default PersonalInfo
