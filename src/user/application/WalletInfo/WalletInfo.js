/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import WalletInfoView from './WalletInfoView.jsx'

const walletInfo = [
  { type: 'text', label: 'social_security' },
  { type: 'text', label: 'wallet_number' }
]

const WalletInfo = ({ handleChange, formData }) => {
  const [error, setError] = useState({
    social_security: false,
    wallet_number: false
  })

  const handleError = (name, value) => {
    setError({ ...error, [name]: value })
  }

  return (
    <WalletInfoView
      handleChange={handleChange}
      walletInfo={walletInfo}
      handleError={handleError}
      error={error}
      userData={formData}
    />
  )
}

WalletInfo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired
}
export default WalletInfo
