import React, { useContext } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { useRoutes } from 'react-router-dom'
import router from 'router/routes'

import light from 'shared/theme/light'
import dark from 'shared/theme/dark'

import { SwitchThemeContext } from 'shared/components/SwitchTheme/SwitchTheme'

function App() {
  const routes = useRoutes(router)
  const { theme } = useContext(SwitchThemeContext)
  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <CssBaseline />
      {routes}
    </ThemeProvider>
  )
}

export default App
