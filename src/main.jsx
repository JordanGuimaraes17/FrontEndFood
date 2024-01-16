import React from 'react'
import ReactDOM from 'react-dom/client'

import { AddDishes } from './pages/AddDishes'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/theme'
import GlobalStyle from './styles/global.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <AddDishes />
    </ThemeProvider>
  </React.StrictMode>
)
