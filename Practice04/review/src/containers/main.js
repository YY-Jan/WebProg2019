import React, { Component } from 'react';
import Input from '../components/input';
import Ul from '../components/list';

class Main extends Component {
    render(){        
        return(
            <section className="todo-app__main">
                <Input acculCnt={this.props.acculCnt} functions={this.props.functions}/>
                <Ul st={this.props.st} data={this.props.data} functions={this.props.functions}/>
            </section>
        );
    }
}

export default Main;