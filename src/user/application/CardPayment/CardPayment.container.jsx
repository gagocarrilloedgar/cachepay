import React from 'react'
import { Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import moment from 'moment'

const CardPayment = ({ details, accept, decline, counter }) => {
  const { t } = useTranslation()
  return (
    <Card>
      <CardHeader
        title={
          <Typography fontWeight="bold" variant="h5">
            {t('transaction_confirmation')}
          </Typography>
        }
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item lg={9}>
            <Typography gutterBottom fontWeight="bold" variant="body1">
              {t('merchant_name').toUpperCase()}: {details?.merchant.toUpperCase()}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {t('payment_description')}: {details?.description}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {t('wallet_number')}: {details?.wallet_to}
            </Typography>
            <Typography gutterBottom>
              {t('date')}: {details?.date}
            </Typography>
          </Grid>
          <Grid item lg={3}>
            <Typography gutterBottom>{t('amount')}:</Typography>
            <Typography gutterBottom variant="h4">
              {details?.amount?.toLocaleString('en-US', {
                style: 'currency',
                currency: 'EUR'
              })}
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ margin: 3 }} />
        <Typography variant="body2" gutterBottom>
          {t('time_left')}:
        </Typography>
        <Typography variant="h4" gutterBottom>
          {moment.utc(counter * 1000).format('mm:ss')}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => accept()} variant="contained">
          {t('payment_accept')}{' '}
        </Button>
        <Button color="secondary" onClick={() => decline()} variant="outlined">
          {t('payment_decline')}
        </Button>
      </CardActions>
    </Card>
  )
}

CardPayment.propTypes = {
  details: PropTypes.object.isRequired,
  accept: PropTypes.func.isRequired,
  decline: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
}

export default CardPayment
