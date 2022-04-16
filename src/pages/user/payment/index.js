import React from 'react'
import { useTranslation } from 'react-i18next'
import CardPayment from 'user/application/CardPayment/CardPayment'
import UserLayout from 'user/application/Layout/Layout'

const PaymentConfirmation = () => {
  const { t } = useTranslation()
  return (
    <UserLayout>
      <h1>{t('payment_title')}</h1>
      <p>{t('payment_subtitle')}</p>
      <CardPayment />
    </UserLayout>
  )
}

export default PaymentConfirmation
