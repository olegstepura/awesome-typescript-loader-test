import React, { Component } from 'react'
import { Test2 } from 'some/other/ns/Test2'

export class Test1 extends Component<{}, {}> {
  render() {
    return (
      <div>
        <p>I'm Tets1</p>
        <Test2 />
      </div>
    )
  }
}
