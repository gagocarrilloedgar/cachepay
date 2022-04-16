import React from 'react'
import { Snackbar, IconButton, Alert } from '@mui/material'
import Close from '@mui/icons-material/Close'
import { useSnackbar } from './useSnackbar'

const SnackbarAlert = () => {
  const { snackbar, handleSnackbarClose } = useSnackbar()
  const { open, message, variant } = snackbar
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={handleSnackbarClose}>
          <Close />
        </IconButton>
      ]}
      open={open}
      autoHideDuration={3000}
      onClose={handleSnackbarClose}
    >
      <Alert variant="filled" onClose={handleSnackbarClose} sx={{ width: '100%' }} severity={variant}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default SnackbarAlert
