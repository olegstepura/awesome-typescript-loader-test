import React, { Component } from 'react'
import { Link } from 'react-router'

export class Home extends Component<{}, {}> {
  render() {
    return (
      <div>
        <p>Layout container</p>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/test1">test1</Link></li>
          <li><Link to="/test2">test1</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
