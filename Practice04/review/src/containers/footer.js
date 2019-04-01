import React, { Component } from 'react';

class Footer extends Component {
    css = (idx) => {
        return { border: (this.props.st===idx ? "1px solid rgba(0, 0, 0, 0.089)" : "none")};
    }
    render(){
        if (this.props.data.length > 0) {
            let completedCnt = this.props.data.filter(e => e.completed).length;
            let activeCnt = this.props.data.filter(e => !e.completed).length;
            return(
                <footer className="todo-app__footer" id="todo-footer">
                    <div className="todo-app__total" id='cnt'>{activeCnt} left</div>
                    <ul className="todo-app__view-buttons">
                        <li><button style={this.css(0)} onClick={() => {this.props.functions.updateSt(0)}}>All</button></li>
                        <li><button style={this.css(1)} onClick={() => {this.props.functions.updateSt(1)}}>Actve</button></li>
                        <li><button style={this.css(2)} onClick={() => {this.props.functions.updateSt(2)}}>Completed</button></li>
                    </ul>
                    <div style={{visibility: (completedCnt===0 ? "hidden" : "visible")}} className="todo-app__clean" id="clean_div"><button onClick={() => {this.props.functions.clearCompleted()}}>Clear Completed</button></div>
                </footer>
            );
        }
        else {
            return null;
        }
    }
}

export default Footer;
