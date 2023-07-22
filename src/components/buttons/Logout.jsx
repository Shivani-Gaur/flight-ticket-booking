import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'

export class Logout extends Component {
  render() {
    return (
        <>
        <Header/>
        <div>
            <h2>Sucessfully Logged Off</h2></div>
      </>
    )
  }
}

export default Logout