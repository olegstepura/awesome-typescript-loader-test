import React, { Component } from 'react'
import { Test1 } from 'some/name/space/Test1'

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
        <h1>App</h1>
        <Test1 />
      </div>
    )
  }
}
