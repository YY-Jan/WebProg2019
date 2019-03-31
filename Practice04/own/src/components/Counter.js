import React, {Component} from 'react';

class Counter extends Component {
  render() {
    return (
      <div className="counter">{this.props.count} left</div>
    );
  }
}

export default Counter
