import 'babel-polyfill'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Root, RootProps } from 'container/Root'
import { AppContainer } from 'react-hot-loader'
import { configureHistory } from 'router/history'
import { configureStore } from 'store/configureStore'
import { routes } from 'router/routes'

const store = configureStore()
export const history = configureHistory(store)

const domElement = document.getElementById('root')
const renderApp = (RootComponent: new () => Component<RootProps, any>) => {
  render(
    <AppContainer>
      <RootComponent store={store} history={history} routes={routes} />
    </AppContainer>,
    domElement
  )
}

if (module.hot) {
  module.hot.accept('container/Root', () => renderApp(Root))
}

renderApp(Root)

