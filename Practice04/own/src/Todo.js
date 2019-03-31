import React, {Component} from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import ViewButton from './components/ViewButton';
import Cleaner from './components/Cleaner';
import Input from './components/Input';
import TodoList from './components/TodoList';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: [], currentId: 0, viewmode:'all'};
  }

  handleInput = (event) => {
    if (event.key === "Enter" && event.target.value !== '')  {
      const value = event.target.value;
      this.setState((state, props) => ({
        todos: state.todos.concat({
          id: state.currentId, "name": value, "date": "", "person": "", "category": "", checked: false
        }),
        currentId: state.currentId+1
      }));
      // new_item(event.target.value);
      event.target.value = "";
    }
  }

  handleCheckbox = (e) => {
    const index = parseInt(e.target.id);
    const checked = e.target.checked;
    this.setState({todos: this.state.todos.map((el) => (index === el.id? {...el, checked:checked}: el))});
  }
  handleItemText = e => {
  }
  handleX = e => {
    const index = parseInt(e.target.dataset.id);
    this.setState({todos: this.state.todos.filter((el) => el.id !== index)});
  }
  handlers = {handleCheckbox: this.handleCheckbox, handleItemText: this.handleItemText, handleX: this.handleX};
  handleClear = e => {
    this.setState({todos: this.state.todos.filter(el => !el.checked)});
  }
  handleViewmode = (e, mode) => {
    this.setState({viewmode: mode});
  }

  render() {
    const currentList = this.state.todos.filter(elem => elem !== undefined);
    const leftList = currentList.filter(elem => !elem.checked);
    return (
      <div className="todo-app" data-viewmode={this.state.viewmode} >
        <Header />
        <section className="main">
          <Input onKeyUp={this.handleInput} />
          <TodoList todos={currentList} handlers={this.handlers} />
        </section>
        <footer className="footer">
          <Counter count={leftList.length} />
          <div className="view-buttons">
            <ViewButton text="All" onClick={e => this.handleViewmode(e, 'all')} />
            <ViewButton text="Active" onClick={e => this.handleViewmode(e, 'active')} />
            <ViewButton text="Completed" onClick={e => this.handleViewmode(e, 'completed')} />
          </div>
          <Cleaner visibility={currentList.length-leftList.length} onClick={this.handleClear} />
        </footer>
      </div>
    );
  }
}

export default Todo
