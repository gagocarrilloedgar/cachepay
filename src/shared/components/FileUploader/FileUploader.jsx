import { Box, Button, Card, Typography } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import React from 'react'

const FileUploader = ({ file, handleUpload }) => {
  const { t } = useTranslation()
  return (
    <Card sx={{ width: '100%' }} variant="outlined">
      <Box sx={{ margin: 3 }} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <CloudUploadIcon color="primary" />
        <Button color="inherit" component="label">
          {t('upload')}
          <input
            id="logo-update"
            name="logo"
            hidden
            type="file"
            onChange={(e) => handleUpload(e.target.name, e.target.files[0])}
          />
        </Button>
        <Typography variant="caption">{file?.name}</Typography>
      </Box>
    </Card>
  )
}

FileUploader.propTypes = {
  file: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  handleUpload: PropTypes.func.isRequired
}

export default FileUploader
