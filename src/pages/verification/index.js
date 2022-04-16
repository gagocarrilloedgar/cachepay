import React, { useState, useEffect } from 'react'
import { Button, Card, CardContent, CardHeader, Container, TextField, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/system'
import reggexutil from 'shared/utils/reggex'

const VerificationView = () => {
  const { t } = useTranslation()
  const [error, setError] = useState(false)
  const [verificationCode, setVerificationCode] = useState('')

  useEffect(() => {
    if (verificationCode !== '' && !verificationCode.match(reggexutil.number)) {
      setError(true)
    } else {
      setError(false)
    }
  }, [verificationCode])

  const verify = () => {
    if (error && verificationCode.length === 6) {
      alert('Verification code is correct')
      setError(false)
      window.history.pushState({}, undefined, '/')
    } else {
      setError(true)
    }
  }

  const sendVerificationCode = () => {
    alert('Verification code has been sent')
  }

  const handleChange = (e) => setVerificationCode(e.target.value)

  console.log(error, verificationCode, verificationCode.match(reggexutil.number))

  return (
    <Container maxWidth="md">
      <Box
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          display: 'flex'
        }}
        minHeight="100vh"
      >
        <Card variant="outlined">
          <CardHeader title={t('verification_title')} subheader={t('verification_subtitle')} />
          <Box component="form" onSubmit={verify}>
            <CardContent sx={{ textAlign: 'center' }}>
              <TextField
                key="verificationCode"
                error={error}
                margin="dense"
                required
                value={verificationCode}
                autoFocus
                onChange={handleChange}
                name="verificationCode"
                id="verificationCode"
                autoComplete="verificationCode"
                sx={{ width: '80%' }}
                helperText={error ? t('verification_code_error', { ns: 'errors' }) : ''}
                label={t('verification_code')}
              />
              <Typography margin="10px" variant="body2">
                {t('verification_email_not_found')}
                <a
                  href="#"
                  style={{ textDecoration: 'none', color: '#000', fontWeight: 'bolder' }}
                  onClick={sendVerificationCode}
                >
                  {t('new_email')}
                </a>
              </Typography>
            </CardContent>
            <CardContent>
              <Button type="submit" onClick={verify} size="small" variant="contained">
                {t('verification_button')}
              </Button>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </Container>
  )
}

VerificationView.propTypes = {}

export default VerificationView
