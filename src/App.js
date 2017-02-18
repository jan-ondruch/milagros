/*
RE-READ the best practises & your ReactJS pdf notes for better composition and program structure.
*/

import React, { Component } from 'react';
import './App.css';
import InstaApi from './InstaApi.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Milagros</h2>
          <h5>Instagram API, ReactJS and Heroku.</h5>
        </div>
        <InstaApi />
        <div style={{'height': 200, backgroundColor: '#3d3d3d', marginTop: '4em'}}></div>
      </div>
    );
  }
}

export default App;
