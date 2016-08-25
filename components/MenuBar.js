import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'

export default class MenuBar extends Component {
  render(){
    return(
      <div>
          {this.props.children}
          <IndexLink to='/'>Home</IndexLink>
          &nbsp;
          <Link to='/about'>About</Link>
      </div>
    )
  }
}
