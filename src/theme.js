import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fed403',
    },
    secondary: {
      main: '#212121',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.1rem',
    },
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiCard: {
      defaultProps: {
        variant: 'filled',
      },
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: 50,
          padding: '12px 24px',
          textTransform: 'capitalize',
          '&:hover': {
            boxShadow: 'none',        // Remove shadow on hover
          },
          '&:active': {
            boxShadow: 'none',        // Remove shadow when active (pressed)
          },
          '&:focus': {
            boxShadow: 'none',        // Remove shadow on focus
          },
        },
      },
    },
  },
});

export default theme;
