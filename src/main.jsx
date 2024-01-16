import React from 'react'
import ReactDOM from 'react-dom/client'

import { Dishes } from './pages/Dishes'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/theme'
import GlobalStyle from './styles/global.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Dishes />
    </ThemeProvider>
  </React.StrictMode>
)
