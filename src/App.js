import React, { Component } from 'react';
import './App.css';
import Feed from './Feed.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Milagros</h2>
        </div>
        <Feed />
      </div>
    );
  }
}

export default App;
