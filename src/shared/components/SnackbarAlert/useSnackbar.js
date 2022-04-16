import { useContext } from 'react'
import { SnackbarContext } from './SnackbarAlert'

export const useSnackbar = () => useContext(SnackbarContext)
