import './App.css';
import React, { useContext, useMemo } from 'react';
import RouteConfig from './routes';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
// material
import { CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Context from './Context';

function App() {
  const {isLightTheme, setIsLightTheme} = useContext(Context);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isLightTheme ? 'light' : 'dark',
          background: {
            default:  isLightTheme ? "#fff" : "#363636;"
          },
          color: {
            default:  isLightTheme ? "#363642" : "#fff"
          }
        }
      })
  );

  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className={`App ${isLightTheme ? 'light' : 'dark'}`}>
            <RouteConfig />
          </div>
        </ThemeProvider>
      </LocalizationProvider>
  );
}

export default App;
