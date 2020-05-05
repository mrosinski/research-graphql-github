import React from 'react'
import { StylesProvider } from '@material-ui/core/styles'
import { createMuiTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'

const customTheme = createMuiTheme()

export const ApplicationTheme: React.FC = ({ children }) => (
  <StylesProvider injectFirst>
    <CssBaseline />
    <MuiThemeProvider theme={customTheme}>
      <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
)
