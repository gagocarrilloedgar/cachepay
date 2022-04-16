import React from 'react'
import PropTypes from 'prop-types'
import VerticalNavbar from 'shared/components/VerticalNavbar/VerticalNavbar'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded'
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded'
import { navigation } from 'shared/lib/constants'
import { PaymentRounded } from '@mui/icons-material'

const navItems = [
  {
    label: 'Profile',
    icon: <AccountCircleRoundedIcon color="secondary" />,
    href: navigation.user
  },
  {
    label: 'Settings',
    icon: <SettingsApplicationsRoundedIcon color="secondary" />,
    href: navigation.userAccount
  },
  {
    label: 'Payments',
    icon: <PaymentRounded color="secondary" />,
    href: navigation.userPayment
  },
  {
    label: 'Logout',
    icon: <ExitToAppRoundedIcon color="secondary" />,
    href: navigation.userLogin
  }
]

const UserLayout = (props) => <VerticalNavbar items={navItems}>{props.children}</VerticalNavbar>

UserLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default UserLayout
