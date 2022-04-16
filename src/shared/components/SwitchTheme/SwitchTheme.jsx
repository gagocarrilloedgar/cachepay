/* eslint-disable multiline-ternary */
import React, { useState, createContext, useContext } from 'react'
import { IconButton } from '@mui/material'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'
export const SwitchThemeContext = createContext(null)

export const SwitchThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return <SwitchThemeContext.Provider value={{ theme, toggleTheme }}>{children}</SwitchThemeContext.Provider>
}

SwitchThemeProvider.propTypes = {
  children: PropTypes.node
}

const SwitchTheme = () => {
  const { theme, toggleTheme } = useContext(SwitchThemeContext)

  return (
    <IconButton onClick={toggleTheme} style={{ position: 'relative', margin: '10px' }}>
      {theme === 'light' ? (
        <LightModeOutlinedIcon style={{ color: useTheme().palette.text.primary }} />
      ) : (
        <DarkModeOutlinedIcon style={{ color: useTheme().palette.text.primary }} />
      )}
    </IconButton>
  )
}

export default SwitchTheme
