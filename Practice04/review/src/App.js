import React, { Component } from 'react';
import Main from './containers/main';
import Footer from './containers/footer';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos:[],
            st: 0,
            acculCnt: 0
        };
    }
    functions = {
        addTodo: (todoItem) => {
            let newTodos = this.state.todos.concat([todoItem]);
            this.setState((state) => ({ todos:newTodos, acculCnt:state.acculCnt+1}));
        },
        deleteTodo: (idx) => {
            let newTodos = this.state.todos.filter(e => e.id!== idx);
            this.setState({todos:newTodos});
        },
        markComplete: (idx) =>{
            let newTodos = this.state.todos.map(e => {return (e.id!==idx) ? e : {item:e.item, completed:!e.completed, id:e.id}});
            this.setState({todos:newTodos});
        },
        updateSt: (st) =>{
            this.setState({st:st});
        },
        clearCompleted: () => {
            let newTodos = this.state.todos.filter(e => !e.completed);
            this.setState({todos:newTodos});
        }    
    }

    render() {
        return (
            <div className="todo-app__root">
                <header className="todo-app__header"><h1 className="todo-app__title">todos</h1></header>
                <Main acculCnt={this.state.acculCnt} st={this.state.st} data={this.state.todos} functions={this.functions} />
                <Footer st={this.state.st} data={this.state.todos} functions={this.functions}/>
            </div>
        );
    }
}

export default App;
