import React, {Component} from 'react';

class ViewButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>{this.props.text}</button>
    );
  }
}

export default ViewButton;
