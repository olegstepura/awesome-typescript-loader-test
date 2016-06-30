import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { IStore } from 'redux'
import { ApplicationState } from 'model/ApplicationState'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

export class App extends Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>Test App</h1>
      </div>
    )
  }
}

export interface RootProps {
  store: IStore<ApplicationState>,
  history: HistoryModule.History,
  routes: ReactRouter.RouteConfig
}

export class RootComponent extends Component<RootProps, {}> {
  render() {
    const { store, history, routes } = this.props

    return (
      <Provider store={store}>
        <Router history={history}>
          {routes}
        </Router>
      </Provider>
    )
  }
}

export const Root = RootComponent
