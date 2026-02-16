import { alpha, createTheme } from '@mui/material/styles'

const colors = {
  background: '#fff8e8',
  card: '#fffdf5',
  ink: '#242424',
  primary: '#ff7b54',
  secondary: '#44bba4',
  accent: '#ffc857',
  muted: '#626262',
}

const doodleShadow = '3px 3px 0 #242424'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary,
      contrastText: '#ffffff',
    },
    secondary: {
      main: colors.secondary,
      contrastText: '#ffffff',
    },
    background: {
      default: colors.background,
      paper: colors.card,
    },
    text: {
      primary: colors.ink,
      secondary: colors.muted,
    },
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: '"DFGirl", "Comic Sans MS", "Marker Felt", cursive',
    h4: {
      fontWeight: 700,
      letterSpacing: '0.03em',
    },
    subtitle1: {
      fontWeight: 500,
    },
    button: {
      fontWeight: 700,
      letterSpacing: '0.05em',
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          minHeight: '100vh',
          color: colors.ink,
          backgroundColor: colors.background,
          backgroundImage:
            'radial-gradient(circle at 12% 18%, rgba(255,123,84,0.18) 0 72px, transparent 74px), radial-gradient(circle at 88% 82%, rgba(68,187,164,0.16) 0 90px, transparent 92px), repeating-linear-gradient(0deg, rgba(0,0,0,0.05), rgba(0,0,0,0.05) 1px, transparent 1px, transparent 28px)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '2px solid #242424',
          boxShadow: doodleShadow,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          border: '2px solid #242424',
          borderRadius: 999,
          boxShadow: doodleShadow,
          paddingInline: 18,
          transition: 'transform 120ms ease, box-shadow 120ms ease',
          '&:hover': {
            transform: 'translate(-1px, -1px) rotate(-1deg)',
            boxShadow: '4px 4px 0 #242424',
          },
          '&:active': {
            transform: 'translate(1px, 1px)',
            boxShadow: '1px 1px 0 #242424',
          },
        },
        containedPrimary: {
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
        },
        outlined: {
          background: '#ffffff',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: '#fffef8',
          '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: '2px',
            borderColor: '#242424',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#242424',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.secondary,
            borderWidth: '3px',
          },
          '&.Mui-focused': {
            boxShadow: `0 0 0 4px ${alpha(colors.secondary, 0.22)}`,
          },
        },
        input: {
          paddingTop: 12,
          paddingBottom: 12,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: colors.ink,
          fontWeight: 700,
          '&.Mui-focused': {
            color: colors.secondary,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: colors.ink,
          '& .MuiSvgIcon-root': {
            fontSize: 30,
            filter: 'drop-shadow(1px 1px 0 #242424)',
          },
          '&.Mui-checked': {
            color: colors.secondary,
            transform: 'rotate(-5deg)',
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: colors.ink,
          '& .MuiSvgIcon-root': {
            fontSize: 30,
            filter: 'drop-shadow(1px 1px 0 #242424)',
          },
          '&.Mui-checked': {
            color: colors.primary,
            transform: 'rotate(6deg)',
          },
        },
      },
    },
  },
})

export default theme
