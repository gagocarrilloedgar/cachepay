import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import DataTable from 'shared/components/DataTable/DataTable'
import data from './mockData.json'
import CompanyLayout from 'company/application/Layout/Layout'
import CompanyRepository from 'company/infrastructure/repository'
import CompanyService from 'company/domain/service'

const CompanyDashboard = () => {
  const companyRepository = CompanyRepository()
  const { getTransations, transactions } = CompanyService(companyRepository)
  const [dataTable, setDataTable] = useState(transactions)

  const { t } = useTranslation()

  const columns = [
    { field: 'quantity', headerName: t('quantity'), width: 200 },
    {
      field: 'user',
      headerName: t('user'),
      width: 200
    },

    {
      field: 'wallet_from',
      headerName: t('wallet_from'),
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

  return (
    <CompanyLayout>
      <h1>{t('company_dashboard')}</h1>
      <p>{t('company_dashboard_subtitle')}</p>
      <DataTable columns={columns} data={data} />
    </CompanyLayout>
  )
}

export default CompanyDashboard
