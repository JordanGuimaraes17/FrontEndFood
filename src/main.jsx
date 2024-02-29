import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './hooks/auth'

import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles/theme'
import GlobalStyle from './styles/global.js'

import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
