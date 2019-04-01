import React, { Component } from 'react';

class Input extends Component {
    update = e => {
        if ((e.key === "Enter") && (e.target.value !== '')) {
            this.props.functions.addTodo({item:e.target.value, completed:false, id:this.props.acculCnt});
            e.target.value = "";
        }
    }
    render(){
        return(
            <input id="todo-input" className="todo-app__input" type="text" placeholder="What needs to be done?" onKeyPress={this.update}/>
        );
    }
}

export default Input;