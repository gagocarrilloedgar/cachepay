/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import NameField from 'shared/components/TextFields/NameField'
import PropTypes from 'prop-types'
import DataFromLayout from 'shared/components/DatFormLayout/DataFormLayout'

const userInfo = [
  { type: 'text', label: 'iban_number' },
  { type: 'text', label: 'company_number' },
  { type: 'text', label: 'wallet_number' }
]

const FinancialInfo = ({ handleChange, walletInfo }) => {
  const [error, setError] = useState({
    social_security: false,
    wallet_number: false
  })

  const handleError = (name, value) => {
    setError({ ...error, [name]: value })
  }

  const UserInputTypes = {
    text: ({ label = '', type = '' }) => (
      <NameField
        labelError={label}
        error={error[label]}
        setError={handleError}
        label={label}
        type={type}
        value={walletInfo[label]}
        handleChange={handleChange}
      />
    )
  }

  return <DataFromLayout componentData={UserInputTypes} mappingData={userInfo} title="wallet_info" />
}

FinancialInfo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  walletInfo: PropTypes.object.isRequired
}
export default FinancialInfo
