import React, { Component } from 'react';
import xpic from './x.png';

class Ul extends Component {
    render(){
        let todos = this.props.data;
        if (this.props.st !== 0){
            todos = todos.filter(e => (this.props.st===2)===e.completed);
        }
        return(
            <ul id="totalList" className="todo-app__list">
                { todos.map((e,i) => (<Li key={i} keynum={i} data={e} functions={this.props.functions}/>)) }
            </ul>
        );
    }
}

class Li extends Component {
    css = (flag) => {
        return({
            textDecoration: flag ? "line-through": null,
            opacity: flag ? 0.5 :null
        });
    };
    render(){
        return(
            <li className="todo-app__item">
                <div className="todo-app__checkbox">
                    <input checked={this.props.data.completed} id={this.props.keynum} type="checkbox" onChange={()=>{this.props.functions.markComplete(this.props.data.id)}}/>
                    <label htmlFor={this.props.keynum}/>
                </div>
                <h1 style={this.css(this.props.data.completed)} className="todo-app__item-detail">{this.props.data.item}</h1>
                <img src={xpic} className="todo-app__item-x" onClick={()=>{this.props.functions.deleteTodo(this.props.data.id)}} alt="x.png"></img>
            </li>
        );
    }
}

export default Ul; 
