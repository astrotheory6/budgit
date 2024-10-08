// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Lato',
    bold: {
      fontFamily: 'Lato', // "Helvetica Neue"
      fontWeight: 'bold',
      fontSize: 30
    },
    body1: {
      fontFamily: 'Lato',
      fontSize: 18
    },
    priceModal: {
      fontFamily: 'Lato',
      fontWeight: 'bold',
      fontSize: 25
    },
  },
});

export default theme;
