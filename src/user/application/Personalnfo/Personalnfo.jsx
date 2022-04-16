/* eslint-disable multiline-ternary */
import React from 'react'
import CountrySelect from 'shared/components/CountriesCities/CountrySelect'
import NationalitySelect from 'shared/components/CountriesCities/NationalitySelect'
import CitySelect from 'shared/components/CountriesCities/CitySelect'
import PhoneSelect from 'shared/components/CountriesCities/PhoneSelect'
import BaseDatePicker from 'shared/components/BaseDatePicker/BaseDatePicker'
import NameField from 'shared/components/TextFields/NameField'
import PropTypes from 'prop-types'
import DataFromLayout from 'shared/components/DatFormLayout/DataFormLayout'

const PersonalInfo = ({
  personalInfo,
  countryData,
  personalData,
  error,
  handleFormData,
  number,
  setCountryData,
  handleError,
  setNumber
}) => {
  const UserInputTypes = {
    text: ({ label }) => (
      <NameField
        labelError={'name_error'}
        error={error[label]}
        setError={handleError}
        label={label}
        value={personalData[label]}
        handleChange={handleFormData}
      />
    ),
    country: () => <CountrySelect handleChange={handleFormData} setCountryData={setCountryData} countryData={countryData} />,
    city: () => <CitySelect handleChange={handleFormData} cities={countryData?.cities} />,
    date: () => <BaseDatePicker handleChange={handleFormData} value={personalInfo?.birthdate} />,
    nationality: () => <NationalitySelect nationality={personalData.nationality} handleChange={handleFormData} />,
    phone: () => <PhoneSelect setNumber={setNumber} number={number} error={error.phone_number} setError={handleError} />
  }

  return <DataFromLayout componentData={UserInputTypes} mappingData={personalInfo} title="personal_info" />
}

PersonalInfo.propTypes = {
  handleFormData: PropTypes.func.isRequired,
  personalData: PropTypes.object.isRequired,
  personalInfo: PropTypes.array.isRequired,
  countryData: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  handleError: PropTypes.func.isRequired,
  setNumber: PropTypes.func.isRequired,
  setCountryData: PropTypes.func.isRequired,
  number: PropTypes.object.isRequired
}

export default PersonalInfo
