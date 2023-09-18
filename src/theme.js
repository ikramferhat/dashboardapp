import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';

const theme =  createTheme({
  palette: {
    background: {
      dark: "#000",
      light: "#fff"
    }
  }
});

export default theme;