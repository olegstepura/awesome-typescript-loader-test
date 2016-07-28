import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { Store } from 'redux'
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
  store: Store<ApplicationState>,
  history: HistoryModule.History,
  routes: ReactRouter.RouteConfig
}

Router.prototype.componentWillReceiveProps = function(nextProps) {
  let components = [];
  function grabComponents(element) {
    // This only works for JSX routes, adjust accordingly for plain JS config
    if (element.props && element.props.component) {
      components.push(element.props.component);
    }
    if (element.props && element.props.children) {
      React.Children.forEach(element.props.children, grabComponents);
    }
  }
  grabComponents(nextProps.routes || nextProps.children);
  components.forEach(React.createElement); // force patching
}

export class RootComponent extends Component<RootProps, {}> {
  render() {
    const { store, history, routes } = this.props

    return (
      <Provider store={store}>
        <Router history={history} routes={routes} key={Math.random()} />
      </Provider>
    )
  }
}

export const Root = RootComponent
