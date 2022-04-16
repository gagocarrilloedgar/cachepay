/* eslint-disable multiline-ternary */
import React from 'react'
import NameField from 'shared/components/TextFields/NameField'
import PropTypes from 'prop-types'
import DataFromLayout from 'shared/components/DatFormLayout/DataFormLayout'

const WalletInfo = ({ handleChange, walletInfo, handleError, error, userData }) => {
  const UserInputTypes = {
    text: ({ label = '', type = '' }) => (
      <NameField
        labelError={'social_security_error'}
        error={error[label]}
        setError={handleError}
        label={label}
        type={type}
        value={userData[label] || ''}
        handleChange={handleChange}
      />
    )
  }

  return <DataFromLayout componentData={UserInputTypes} mappingData={walletInfo} title="wallet_info" />
}

WalletInfo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
  walletInfo: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  userData: PropTypes.object
}
export default WalletInfo
