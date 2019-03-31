import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const todos = this.props.todos.map((todo) => (
      <TodoItem handlers={this.props.handlers} checked={todo.checked} onClick={this.props.onClick} id={todo.id} name={todo.name} key={todo.id} />
    ));
    return (
      <ul className="todo-list" >
        {todos}
      </ul>
    );
  }
}

export default TodoList;
