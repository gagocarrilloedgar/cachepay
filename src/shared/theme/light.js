import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#00457C' },
    secondary: { main: '#0072FF' },
    background: {
      default: '#ffff', // dark:'#121212',
      paper: '#f5f5f5' // dark: '#1C1C1C'
    },
    text: {
      primary: '#000',
      secondary: '#000'
    }
  },
  shape: {
    borderRadius: 5
  },
  overrides: {
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8
      },
      switchBase: {
        padding: 1,
        '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
          transform: 'translateX(16px)',
          color: '#fff',
          '& + $track': {
            opacity: 1,
            border: 'none'
          }
        }
      },
      thumb: {
        width: 24,
        height: 24
      },
      track: {
        borderRadius: 13,
        border: '1px solid #bdbdbd',
        backgroundColor: '#fafafa',
        opacity: 1,
        transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
      }
    }
  },
  props: {
    MuiTooltip: {
      arrow: true
    }
  }
})

export default theme
