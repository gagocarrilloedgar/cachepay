import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useLocation } from 'react-router-dom'
import { Button, Link } from '@mui/material'

const CustomButtonGroup = ({ buttonObjects }) => {
  const location = useLocation()
  const theme = useTheme()

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      {buttonObjects?.map((button, index) => (
        <Button
          style={{
            backgroundColor: location.pathname === button.to ? theme.palette.primary.dark : theme.palette.primary.main
          }}
          key={index}
        >
          <Link style={{ color: theme.palette.primary.contrastText, fontSize: '10px' }} href={button.to}>
            {button.title}
          </Link>
        </Button>
      ))}
    </ButtonGroup>
  )
}

CustomButtonGroup.propTypes = {
  buttonObjects: PropTypes.array
}

CustomButtonGroup.defaultProps = {
  buttonObjects: []
}

export default CustomButtonGroup
