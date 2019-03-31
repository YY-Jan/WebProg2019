import React, {Component} from 'react';

class Input extends Component {
  render() {
    return (
      <input className="input" type="text" placeholder="What needs to be done?" onKeyUp={this.props.onKeyUp} />
    );
  }
}

export default Input;
