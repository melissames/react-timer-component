import React, { Component } from 'react';
import SplitList from './SplitList.js';

class Stopwatch extends Component {

  constructor(props){
    super(props);
      this.state = {
        time: 0,
        splits: [],
        lastClearedIncrementer: null
      }
    this.incrementer = null;
  }


  formattedtime = (seconds) => {
    return Math.floor(seconds/60) + ':' + ('0' + seconds%60).slice(-2)
  }

  handleStartClick = () => {
    this.incrementer = setInterval(() => this.setState({time: this.state.time + 1}), 1000);
  }

  handleSplitClick = () => {
    console.log('LAPPING')
  }

  handleStopClick = () => {
    clearInterval(this.incrementer)
    this.setState({lastClearedIncrementer: this.incrementer})
  }

  render() {
    return (
      <div>
        <div className='stopwatch'>
          <h1>{this.formattedtime(this.state.time)}</h1>
          <div className='buttons-container'>
            <button type='button' onClick={this.handleStartClick}>START</button>
            <button type='button' onClick={this.handleSplitClick}>SPLIT</button>
            <button onClick={this.handleStopClick}>STOP</button>
          </div>
        </div>
        <SplitList />
      </div>
    );
  }
}

export default Stopwatch;
