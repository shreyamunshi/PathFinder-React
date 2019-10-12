import React, {Component} from 'react';
import './Node.scss';

export default class Node extends Component {

  render(){
    const {
      col,
      row,
      isFinish,
      isStart,
    } = this.props
    const extraClassName = isFinish
      ? 'node-finish'
      : isStart
      ? 'node-start'
      : '';
    return (
      <div id={`node-${row}-${col}`}
        className = {`node ${extraClassName}`}>
      </div>
    );
  }
}
