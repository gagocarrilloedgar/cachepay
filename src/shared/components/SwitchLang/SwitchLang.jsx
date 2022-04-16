import React from 'react'
import TranslateIcon from '@mui/icons-material/Translate'
import { useTranslation } from 'react-i18next'
import { FormControl, MenuItem, Select } from '@mui/material'

const SwitchLang = () => {
  const { t, i18n } = useTranslation()

  const handleChange = (value) => {
    i18n.changeLanguage(value)
  }

  return (
    <FormControl style={{ position: 'relative', margin: '10px' }}>
      <Select
        startAdornment={<TranslateIcon sx={{ marginRight: '10px' }} />}
        margin="dense"
        size="small"
        value={i18n?.language || 'en'}
        defaultValue={i18n.languages[1]}
        onChange={(e) => handleChange(e.target.value)}
      >
        <MenuItem value="en">{t('en')}</MenuItem>
        <MenuItem value="es">{t('es')}</MenuItem>
      </Select>
    </FormControl>
  )
}

export default SwitchLang
