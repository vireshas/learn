import React, { Component, PropTypes } from 'react'
import Counter from '../containers/Counter'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = (count) => (
  <MuiThemeProvider>
    <Counter test="hello world">
      <h1>This child is forwarded as-is</h1>
    </Counter>
  </MuiThemeProvider>
)

export default App
