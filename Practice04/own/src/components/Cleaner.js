import React, {Component} from 'react';

class Cleaner extends Component {
  render() {
    return (
      <div className="cleaner">
        <button style={ {visibility: this.props.visibility>0? 'visible': 'hidden'} } onClick={this.props.onClick} >Clear completed</button>
      </div>
    );
  }
}

export default Cleaner;
