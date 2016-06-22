import 'babel-polyfill'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { AppContainer } from 'react-hot-loader'

const domElement = document.getElementById('root')
const renderApp = (RootComponent: Component) => {
  render(
    <AppContainer>
      <RootComponent />
    </AppContainer>,
    domElement
  )
}

if (module.hot) {
  module.hot.accept('./App', () => renderApp(App))
}

renderApp(App)

