import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ArrowBackIosRounded'
import ChevronRightIcon from '@mui/icons-material/ArrowForwardIosRounded'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PropTypes from 'prop-types'
import { Container, Tooltip } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '@emotion/react'
import SwitchLang from '../SwitchLang/SwitchLang'
import SwitchTheme from '../SwitchTheme/SwitchTheme'

const drawerWidth = 250

const openedMixin = (theme) => ({
  width: drawerWidth,
  border: 'none',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  border: 'none',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`
  }
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  bottom: 20,
  width: `calc(${theme.spacing(7)} + 1px)`,
  justifyContent: 'flex-end',
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`
  },
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  backgroundColor: theme.palette.background.paper,
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  }),
  [theme.breakpoints.up('sm')]: {
    width: '100px'
  }
}))

const VerticalNavbar = ({ items, children }) => {
  const [open, setOpen] = useState(localStorage.getItem('drawerOpen') === 'true')
  const pathname = useLocation().pathname
  const theme = useTheme()

  const handleDrawerOpen = () => {
    setOpen(true)
    localStorage.setItem('drawerOpen', true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
    localStorage.setItem('drawerOpen', false)
  }

  const logo = {
    open: '/logo.png',
    close:
      'https://images.ctfassets.net/q5ulk4bp65r7/1rFQCqoq8hipvVJSKdU3fQ/21ab733af7a8ab404e29b873ffb28348/coinbase-icon2.svg'
  }
  return (
    <Container maxWidth="xl" style={{ overflow: 'hidden' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Drawer variant="permanent" open={open}>
          <Box sx={{ padding: 1 }}>
            <img alt="logo" height="40px" src={open ? logo.open : logo.close} />
          </Box>
          <List>
            {items?.map((item) => (
              <Tooltip placement="right" arrow title={item.label} key={item.label}>
                <Link style={{ textDecoration: 'none', color: theme.palette.secondary.main }} to={item.href}>
                  <ListItem
                    style={{
                      backgroundColor: item.href === pathname ? theme.palette.background.default : 'transparent'
                    }}
                    button
                    href={item.href}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItem>
                </Link>
              </Tooltip>
            ))}
          </List>
          <DrawerHeader>
            <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
              {!open ? <ChevronRightIcon color="secondary" /> : <ChevronLeftIcon color="secondary" />}
            </IconButton>
          </DrawerHeader>
        </Drawer>
        <Container maxWidth="xl" sx={{ marginBottom: 10, width: '100%' }}>
          <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
            <SwitchLang />
            <SwitchTheme />
          </div>
          {children}
        </Container>
      </Box>
    </Container>
  )
}

VerticalNavbar.propTypes = {
  items: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired
}

export default VerticalNavbar
