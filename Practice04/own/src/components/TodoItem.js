import React, {Component} from 'react';
import X from '../x.png';

class TodoItem extends Component {
  render() {
    const handleCheckbox = this.props.handlers.handleCheckbox;
    const handleItemText = this.props.handlers.handleItemText;
    const handleX = this.props.handlers.handleX;
    return (
      // <li className={this.props.checked?"todo-item view-completed": "todo-item view-active"} ref="dom" >
      <li className={this.props.checked?"todo-item checked": "todo-item unchecked"} >
        <div className="todo-checkbox">
          <input onClick={handleCheckbox} type="checkbox" id={this.props.id} />
          {/* <input onClick={e => handleCheckbox(e, this.refs.dom)} type="checkbox" id={this.props.id} /> */}
          <label htmlFor={this.props.id} />
        </div>
        <h1 className="todo-item-detail" onClick={handleItemText}>{this.props.name}</h1>
        <img src={X} alt="remove" className="todo-item-x" onClick={handleX} data-id={this.props.id} />
      </li>
    );
  }
}

export default TodoItem;
