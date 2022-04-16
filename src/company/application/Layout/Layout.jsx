import React from 'react'
import PropTypes from 'prop-types'
import VerticalNavbar from 'shared/components/VerticalNavbar/VerticalNavbar'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded'
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded'
import { Key } from '@mui/icons-material'
import { navigation } from 'shared/lib/constants'
import { useTranslation } from 'react-i18next'

const CompanyLayout = (props) => {
  const { t } = useTranslation()
  const navItems = [
    {
      label: t('profile'),
      icon: <AccountCircleRoundedIcon color="secondary" />,
      href: navigation.company
    },
    {
      label: t('settings'),
      icon: <SettingsApplicationsRoundedIcon color="secondary" />,
      href: navigation.companyAccount
    },
    {
      label: t('token'),
      icon: <Key color="secondary" />,
      href: navigation.companyToken
    },
    {
      label: t('logout'),
      icon: <ExitToAppRoundedIcon color="secondary" />,
      href: navigation.companyLogin
    }
  ]

  return <VerticalNavbar items={navItems}>{props.children}</VerticalNavbar>
}

CompanyLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default CompanyLayout
