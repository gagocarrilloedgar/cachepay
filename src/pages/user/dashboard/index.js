import React, { useEffect, useState } from 'react'
import UserLayout from 'user/application/Layout/Layout'
import DataTable from 'shared/components/DataTable/DataTable'
import data from './mock.json'
import { Avatar as MUIAvatar } from '@mui/material'
import UserService from 'user/domain/service'
import UserRepository from 'user/infrastructure/repository'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

const Avatar = () => <MUIAvatar src="https://robohash.org/cats?set=set3" sx={{ width: 30, height: 30 }} />

const UserDashboard = () => {
  const userRepository = UserRepository()
  const { getTransations, transactions } = UserService(userRepository)
  const [dataTable, setDataTable] = useState(transactions)

  const { t } = useTranslation()

  const columns = [
    { field: 'logo', headerName: 'Logo', width: 100, renderCell: () => Avatar() },
    {
      field: 'merchant',
      headerName: t('merchant'),
      width: 200
    },
    { field: 'quantity', headerName: t('quantity'), width: 200 },
    {
      field: 'wallet_to',
      headerName: t('wallet_to'),
      width: 350
    },
    {
      field: 'date',
      headerName: t('date'),
      width: 200
    }
  ]

  useEffect(async () => {
    await getTransations()
  }, [])

  useEffect(() => {
    setDataTable(transactions)
  }, [transactions])

  console.log(dataTable)

  const [searchParams] = useSearchParams()
  console.log(searchParams.get('token'))

  return (
    <UserLayout>
      <h1>{t('user_dashboard')}</h1>
      <p>{t('user_dashboard_subtitle')}</p>
      <DataTable columns={columns} data={data} />
    </UserLayout>
  )
}

export default UserDashboard
