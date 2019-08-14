import React from 'react'
import { Router } from '@reach/router'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import theme from './lib/theme'
import Root from './lib/root'
import reset from './lib/reset'

import { Homepage, About } from '../src/pages/index'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Global styles={reset} />
        <Router>
          <Homepage path="/" />
          <About path="about" />
        </Router>
      </Root>
    </ThemeProvider>
  )
}

export default App
