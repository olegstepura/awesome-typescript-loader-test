import React, { Component } from 'react'
import { Test2 } from 'some/other/ns/Test2'
import * as style from './Style.css'

export class Test1 extends Component<{}, {}> {
  render() {
    console.log("test1:", style.test1)
    return (
      <div>
        <p>I'm Test1</p>
        <Test2 />
      </div>
    )
  }
}
