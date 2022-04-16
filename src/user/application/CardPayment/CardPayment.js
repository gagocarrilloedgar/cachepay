import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import SnackbarAlert from 'shared/components/SnackbarAlert/SnackbarAlert.container'
import { useSnackbar } from 'shared/components/SnackbarAlert/useSnackbar'
import UserService from 'user/domain/service'
import UserRepository from 'user/infrastructure/repository'
import CardPaymentContainer from './CardPayment.container'

const mockDetails = {
  id: 1,
  amount: 199.182,
  description: 'Some dummy product description',
  merchant: 'Rigel Avery',
  wallet_to: 'AAEAB75F-2349-A8EC-C4BE-3DE153DD24DC',
  date: 'Feb 1, 2012'
}

const CardPayment = () => {
  const userRepository = UserRepository()
  const { acceptTransaction } = UserService(userRepository)
  const { handleSnackbarChange } = useSnackbar()
  const [counter, setCounter] = useState(60 * 5)
  const { t } = useTranslation()

  const accept = async () => {
    await acceptTransaction()
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [counter])

  const decline = () => {
    handleSnackbarChange(t('declined_payment'), 'success')
  }

  return (
    <>
      <CardPaymentContainer counter={counter} details={mockDetails} accept={accept} decline={decline} />
      <SnackbarAlert />
    </>
  )
}

export default CardPayment
