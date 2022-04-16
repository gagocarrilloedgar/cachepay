/* eslint-disable multiline-ternary */
import React from 'react'
import { Button, TextField } from '@mui/material'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const TokenListContainer = ({ token, generateToken }) => {
  const { t } = useTranslation()
  return (
    <div style={{ marginTop: '30px' }}>
      {token === '' ? (
        <Button onClick={() => generateToken()} variant="contained" color="primary">
          {t('new_token')}
        </Button>
      ) : (
        <TextField disabled fullWidth value={token} />
      )}
    </div>
  )
}

TokenListContainer.propTypes = {
  token: PropTypes.string.isRequired,
  generateToken: PropTypes.func.isRequired
}

export default TokenListContainer
