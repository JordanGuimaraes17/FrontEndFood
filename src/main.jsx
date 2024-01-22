import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/theme'
import GlobalStyle from './styles/global.js'
import { SignIn } from './pages/SignIn'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <SignIn />
    </ThemeProvider>
  </React.StrictMode>
)
