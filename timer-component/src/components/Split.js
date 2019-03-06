import React, { Component } from 'react';

class Split extends Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
    this.props.handleListClick(this.props.index)
  }

  render() {
    return (
      <div className={this.state.clicked ? 'split split-clicked' : 'split'} onClick={this.handleClick}>
        {this.props.split}
      </div>
    );
  }
}

export default Split;
