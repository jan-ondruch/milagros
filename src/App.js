import React, { Component } from 'react'
import InstaApi from './InstaApi'
import HeaderTextCarousel from './HeaderTextCarousel'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Milagros</h2>
          <HeaderTextCarousel />
        </div>
        <InstaApi />
        <div style={{'height': 200, backgroundColor: '#3d3d3d', marginTop: '4em'}}></div>
      </div>
    )
  }
}
