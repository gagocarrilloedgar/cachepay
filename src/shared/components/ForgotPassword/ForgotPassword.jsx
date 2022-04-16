import React from 'react'
import { Box, Button } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import { navigation } from 'shared/lib/constants'
import { useTranslation } from 'react-i18next'

const ForgotPasswordButton = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const type = useLocation().pathname.split('/')[1]

  return (
    <Box sx={{ marginTop: 4, display: 'flex', justifyContent: 'center' }}>
      <Button
        sx={{ padding: '10px 30px' }}
        color="primary"
        variant="contained"
        onClick={() => navigate(`${navigation.forgotPassword}?type=${type}`)}
      >
        {t('forgot_password')}
      </Button>
    </Box>
  )
}

export default ForgotPasswordButton
