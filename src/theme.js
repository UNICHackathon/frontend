import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#fed403',
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
    borderRadius: 10, // Adjust this value to make buttons more rounded
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize', // Capitalize the first letter of each word in all buttons
        },
      },
    },
  },
});

export default theme;
