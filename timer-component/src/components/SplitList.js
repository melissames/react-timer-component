import React, { Component } from 'react';
import Split from './Split.js';

class SplitList extends Component {

  renderSplits = () => {
    return this.props.splitList.map((split, i) => <li key={i}>
                                                    <Split
                                                      index={i}
                                                      split={split}
                                                      handleListClick={this.props.handleListClick}/>
                                                  </li>)
  }

  render() {
    return (
      <div className='centered'>
        <ul className='split-list'>
          {this.renderSplits()}
        </ul>
      </div>
    );
  }
}

export default SplitList;
