import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#43414B',
    },
    secondary: {
      main: '#F0285A',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900, 
      lg: 1080,
      xl: 1536,
    },
  },
});

export default theme;