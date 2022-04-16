import React from 'react'

import { Link } from 'react-router-dom'

import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'

const Welcome = () => {
  const { t } = useTranslation()
  console.log('Welcome')
  return (
    <Container maxWidth="xl">
      <Box sx={{ paddingTop: 20 }}>
        <Box
          sx={{
            marginBottom: 0
          }}
          aria-hidden="true"
        />
        {/* Modify with the logo */}
        <Typography color="primary" component="h1" variant="h1" fontWeight={900}>
          LOGO
        </Typography>
        <Box
          sx={{
            minHeight: '100%'
          }}
        >
          <div>
            <Typography fontWeight={900} component="h2" variant="h2">
              {t('Hello')}!
            </Typography>
            <Typography component="h2" variant="h3">
              {t('Have we met before?')}
            </Typography>
          </div>
          <Box
            sx={{
              paddingTop: 4
            }}
          >
            <Button component={Link} to="/user/login" variant="contained" sx={{ marginRight: 2 }}>
              {t('welcome_login')}
            </Button>
            <Button component={Link} to="/user/register" variant="outlined">
              {t('welcome_register')}
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Welcome
