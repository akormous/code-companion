import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CustomThemeProvider from './theme/CustomThemeProvider.tsx'
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CustomThemeProvider>
  </React.StrictMode>,
)
