import React, { createRef, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import Location from 'shared/components/Location/Location'
import MessageAlert from 'shared/components/MessageAlert/MessageAlert'
import WalletInfo from 'user/application/WalletInfo/WalletInfo'
import PersonalInfo from 'user/application/Personalnfo/Personalnfo'
import UserLayout from 'user/application/Layout/Layout'
import SnackbarAlert from 'shared/components/SnackbarAlert/SnackbarAlert.container'
import { useSnackbar } from 'shared/components/SnackbarAlert/useSnackbar'
import UserRepository from 'user/infrastructure/repository'
import UserService from 'user/domain/service'

const InitState = {
  first_name: '',
  last_name: '',
  birthdate: Date.now(),
  phone_number: '',
  nationality: '',
  country: '',
  city: '',
  adress: '',
  postal_code: '',
  wallet_number: '',
  social_security: ''
}

const UserAccount = () => {
  const { t } = useTranslation(['user', 'error', 'success'])

  const { handleSnackbarChange } = useSnackbar()
  const userRepository = UserRepository()
  const { update, user } = UserService(userRepository)

  const titleRef = createRef()
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState(user)

  useEffect(() => {
    if (formData === InitState) setOpen(false)
  }, [formData])

  useEffect(() => {
    setFormData(user)
  }, [user])

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value })
    setOpen(true)
  }

  const cancelChanges = () => {
    titleRef.current.focus()
    setFormData(InitState)
    setOpen(false)
  }

  const saveChange = () => {
    const data = new FormData()
    Object.keys(formData).map((key) => data.append(key, formData[key]))
    update(data)
      .then(() => {
        handleSnackbarChange(t('user_update_success'), 'success')
        setOpen(false)
      })
      .catch(() => handleSnackbarChange(t('user_update_error'), 'error'))
  }

  return (
    <UserLayout>
      <h1 ref={titleRef}>{t('settings')}</h1>
      <p>{t('settings_subtitle')}</p>
      <MessageAlert open={open} title={t('unsaved_changes')} variant="outlined" save={saveChange} cancel={cancelChanges} />
      <PersonalInfo personalData={formData} handleFormData={handleChange} />
      <Location handleChange={handleChange} locationInfo={formData} />
      <WalletInfo handleChange={handleChange} formData={formData} />
      <SnackbarAlert />
    </UserLayout>
  )
}

export default UserAccount
