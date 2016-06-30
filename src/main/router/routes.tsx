import React from 'react'
import { Home } from 'container/Home'
import { Route } from 'react-router'
import { Test1 } from 'container/some/name/space/Test1'
import { Test2 } from 'container/some/other/ns/Test2'

export const routes = (
  <Route path="/" component={Home}>
    <Route path="/test1" component={Test1} />
    <Route path="/test2" component={Test2} />
  </Route>
)
