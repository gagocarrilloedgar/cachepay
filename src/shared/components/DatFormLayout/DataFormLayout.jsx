import React from 'react'
import { Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const DataFromLayout = ({ mappingData, title, componentData, children }) => {
  const { t } = useTranslation()

  return (
    <>
      <Typography align="left" variant="h6">
        {t(title)}
      </Typography>
      <Grid alignContent="center">
        {mappingData.map((info) => {
          return (
            <Grid sm={12} item key={info.label} sx={{ margin: 2 }}>
              {componentData[info.type]({ label: info.label })}
            </Grid>
          )
        })}
      </Grid>
      <Grid sm={12} item sx={{ margin: 1 }}>
        {children}
      </Grid>
    </>
  )
}

DataFromLayout.propTypes = {
  mappingData: PropTypes.array.isRequired,
  componentData: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default DataFromLayout
