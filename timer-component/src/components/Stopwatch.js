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
    this.setState({splits: [...this.state.splits, this.state.time]})
  }

  handleStopClick = () => {
    clearInterval(this.incrementer)
    this.setState({lastClearedIncrementer: this.incrementer})
  }

  handleResetClick = () => {
    this.handleStopClick()
    this.setState({
      time: 0,
      splits: []
    })
  }

  handleListClick = index => {
    let splitsCopy = [...this.state.splits]
    let slicedSplits = splitsCopy.slice(0, index+1)
    this.setState({
      splits: slicedSplits,
      time: slicedSplits[index]
    })
  }

  render() {
    return (
      <div>
        <div className='stopwatch'>
          <h1 className='centered'>{this.formattedtime(this.state.time)}</h1>
          <div className='buttons-container'>
            {this.state.time === 0 || this.incrementer === this.state.lastClearedIncrementer
              ? <button type='button' onClick={this.handleStartClick}>START</button>
              : <button type='button' onClick={this.handleStopClick}>STOP</button>}
            {this.state.time !== 0 ? <button type='button' onClick={this.handleResetClick}>RESET</button> : null}
            <button type='button' onClick={this.handleSplitClick}>SPLIT</button>
          </div>
        </div>
        <h2 className='centered splits-title'>Splits</h2>
        <SplitList splitList={this.state.splits} handleListClick={this.handleListClick}/>
      </div>
    );
  }
}

export default Stopwatch;
