import React from 'react'
import { Container, CircularProgress } from '@mui/material'

const Loader = () => {
  return (
    <Container sx={{ margin: 'auto' }}>
      <CircularProgress color="primary" />
    </Container>
  )
}

export default Loader
