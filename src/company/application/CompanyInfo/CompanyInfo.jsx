/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react'
import CountrySelect from 'shared/components/CountriesCities/CountrySelect'
import NationalitySelect from 'shared/components/CountriesCities/NationalitySelect'
import CitySelect from 'shared/components/CountriesCities/CitySelect'
import PhoneSelect from 'shared/components/CountriesCities/PhoneSelect'
import BaseDatePicker from 'shared/components/BaseDatePicker/BaseDatePicker'
import NameField from 'shared/components/TextFields/NameField'
import PropTypes from 'prop-types'
import DataFromLayout from 'shared/components/DatFormLayout/DataFormLayout'
import FileUploader from 'shared/components/FileUploader/FileUploader'

const companyInfo = [
  { type: 'text', label: 'company_name' },
  { type: 'country', label: 'country' },
  { type: 'phone', label: 'phone_number' },
  { type: 'city', label: 'city' },
  { type: 'file', label: 'logo' }
]

const CompanyInfo = ({ handleFormData, personalData }) => {
  const [countryData, setCountryData] = useState({ name: '', cities: [] })
  const [number, setNumber] = useState({ code: '', number: '' })
  const [error, setError] = useState({
    first_name: false,
    last_name: false,
    phone_number: false
  })

  useEffect(() => {
    if (number.code !== '' && number.number !== '') handleFormData('phone_number', number.code + number.number)
  }, [number])

  const handleError = (name, value) => {
    setError({ ...error, [name]: value })
  }

  const CompanyInputTypes = {
    text: ({ label = '', type = '' }) => (
      <NameField
        labelError={'name_error'}
        error={error[label]}
        setError={handleError}
        label={label}
        type={type}
        value={personalData[label] || ''}
        handleChange={handleFormData}
      />
    ),
    country: () => <CountrySelect handleChange={handleFormData} setCountryData={setCountryData} countryData={countryData} />,
    city: () => <CitySelect handleChange={handleFormData} cities={countryData?.cities} />,
    date: () => <BaseDatePicker handleChange={handleFormData} value={countryData?.birthdate} />,
    nationality: () => <NationalitySelect nationality={personalData.nationality} handleChange={handleFormData} />,
    phone: () => <PhoneSelect setNumber={setNumber} number={number} error={error.phone_number} setError={handleError} />,
    file: () => <FileUploader handleUpload={handleFormData} file={personalData.logo} />
  }

  return <DataFromLayout componentData={CompanyInputTypes} mappingData={companyInfo} title="company_info" />
}

CompanyInfo.propTypes = {
  handleFormData: PropTypes.func.isRequired,
  personalData: PropTypes.object.isRequired
}

export default CompanyInfo
