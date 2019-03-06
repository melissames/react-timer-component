import React, { Component } from 'react';
import './App.css';
import Stopwatch from './components/Stopwatch.js'

class App extends Component {
  render() {
    return (
      <div className='centered'>
        <Stopwatch />
      </div>
    );
  }
}

export default App;
