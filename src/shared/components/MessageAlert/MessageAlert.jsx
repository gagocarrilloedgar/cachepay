import React from 'react'
import { Alert, Collapse, IconButton, Button, ButtonGroup } from '@mui/material'
import PropTypes from 'prop-types'
import CloseIcon from '@mui/icons-material/Close'
import SaveIcon from '@mui/icons-material/Save'
const varianTypes = ['outlined', 'filled', 'standar']
const severities = ['error', 'warning', 'info', 'success']

const CloseButton = ({ onClick }) => {
  return (
    <IconButton aria-label="close" color="inherit" size="small" onClick={onClick}>
      <CloseIcon fontSize="inherit" />
    </IconButton>
  )
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

const ActionAlertGroup = ({ save, severity, cancel }) => {
  return (
    <ButtonGroup disabled={severity === 'error'} disableElevation>
      <Button
        variant="standard"
        color="inherit"
        size="medium"
        aria-label="cancel"
        startIcon={<CloseIcon fontSize="inherit" />}
        onClick={() => cancel()}
      >
        Cancel
      </Button>
      <Button
        variant="standard"
        aria-label="save"
        color="inherit"
        size="medium"
        onClick={() => save()}
        startIcon={<SaveIcon fontSize="inherit" />}
      >
        Save
      </Button>
    </ButtonGroup>
  )
}

ActionAlertGroup.propTypes = {
  save: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  severity: PropTypes.oneOf(severities).isRequired
}

const MessageAlert = ({ open, title, save, cancel, variant, severity }) => {
  return (
    <Collapse in={open}>
      <Alert
        action={<ActionAlertGroup severity={severity} save={save} cancel={cancel} />}
        variant={variant}
        style={{ margin: '10px 0px' }}
        severity={severity}
      >
        {title}
      </Alert>
    </Collapse>
  )
}

MessageAlert.propTypes = {
  open: PropTypes.bool.isRequired,
  save: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(varianTypes),
  severity: PropTypes.oneOf(severities)
}

MessageAlert.defaultProps = {
  variant: 'standard',
  severity: 'warning'
}

export default MessageAlert
