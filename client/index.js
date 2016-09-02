import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import injectTapEventPlugin from 'react-tap-event-plugin';

import reducer from './reducers'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Replay from './components/Replay'
import Reports from './components/Reports'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

let store = createStore(reducer)

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/replay" component={Replay} />
        <Route path="/reports" component={Reports} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
