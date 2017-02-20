import Footer from './Footer'
import Header from './Header'
import Info from './Info'
import InstaApi from './InstaApi'
import React, { Component } from 'react'


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Info />
        <InstaApi />
        <Footer />
      </div>
    )
  }
}