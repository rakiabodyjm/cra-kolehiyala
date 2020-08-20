import React from 'react'
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'

import { CssBaseline } from '@material-ui/core'
import Login from './pages/Login'

function App() {
  const theme = responsiveFontSizes(
    createMuiTheme({
      palette: {
        primary: {
          light: '#ffc7c7',
          main: '#ea9696',
          dark: '#b66768',
          contrastText: '#000000',
        },
        secondary: {
          light: '#8654ff',
          main: '#3f21ff',
          dark: '#0000ca',
          contrastText: '#ffffff',
        },
        text: {
          primary: 'rgba(0,0,0, 1.00)',
          secondary: 'rgba(0,0,0, 0.75)',
          primaryPurple: '#2F1AA6',

          // secondary: "red",
        },
      },
      typography: {
        fontFamily: 'Montserrat, Roboto, Helvetica, Arial, sans-serif',
      },
    })
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Login />
    </ThemeProvider>
  )
}

export default App
