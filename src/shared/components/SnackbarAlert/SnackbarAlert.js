import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import SnackbarContainer from './SnackbarAlert.container'

export const SnackbarContext = createContext(null)

const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: 'Everything went well',
    variant: 'success'
  })

  const handleSnackbarClose = () => setSnackbar({ ...snackbar, open: false })
  const handleSnackbarChange = (message, variant) => setSnackbar({ ...snackbar, open: true, message, variant })

  return (
    <SnackbarContext.Provider value={{ snackbar, handleSnackbarClose, handleSnackbarChange }}>
      {children}
      <SnackbarContainer />
    </SnackbarContext.Provider>
  )
}

SnackbarProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default SnackbarProvider
