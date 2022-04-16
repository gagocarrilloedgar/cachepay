import React from 'react'
import { Link, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export const Copyright = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href={props.href}>
        {props.website + '  '}
      </Link>
      {new Date().getFullYear()}
    </Typography>
  )
}

Copyright.propTypes = {
  website: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node
}

Copyright.defaultProps = {
  website: ' My website ',
  href: 'https://www.mywebsite.com'
}

export default Copyright
