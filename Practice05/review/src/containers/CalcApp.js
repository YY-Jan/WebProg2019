import React from 'react';

import CalcButton from '../components/CalcButton';

// calculator App
// it is better to use all string operation
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 0
    };
    this.previousNum = 0 ;
    this.nowNum = 0;
    this.previousOpr = '';
    this.check = true;
    this.stop = false;
  };

  resetState = () => {
    this.setState(state => ({ count: 0 }));
    this.previousNum = 0 ;
    this.nowNum = 0;
    this.previousOpr = '';
    this.check = true;
    this.stop = false;
  }

  setNumber = num => this.setState(() => ({ count: num }));

  NumberState = e => {
    // implement numbers
    console.log(e.target.innerText)
    if (this.previousOpr !== '') {
      this.check = false;
    }
    if (this.stop) {
      this.setNumber(e.target.innerText);
      this.stop = false;
    } else if (this.previousOpr === '') {
      if (this.state.count === 0) {
        this.setNumber(e.target.innerText);
      } else{
        this.setNumber(Number(this.state.count.toString().concat(e.target.innerText)));
      }
    } else{
      if (this.nowNum === 0) {
        this.setNumber(e.target.innerText);
        this.nowNum = Number(this.state.count);
      } else{
        this.setNumber(Number(this.state.count.toString().concat(e.target.innerText)));
        this.nowNum = Number(this.state.count);
      }
    }
  }

  OperatorState = e => {
    // implement operators
    if (e.target.innerText !== '=' && this.check){
      this.previousOpr = e.target.innerText;
      this.previousNum = Number(this.state.count);
    } else{
      if (this.previousOpr === 'x') {
        this.setNumber(Number(this.previousNum) * Number(this.state.count));
      } else if (this.previousOpr === '+'){
        this.setNumber(Number(this.previousNum) + Number(this.state.count));
      } else if (this.previousOpr === '-') {
        this.setNumber(Number(this.previousNum) - Number(this.state.count));
      } else if (this.previousOpr === '÷') {
        this.setNumber(Number(this.previousNum) / Number(this.state.count));
      }
      this.previousNum = 0 ;
      this.nowNum = 0;
      this.previousOpr = '';
      this.check = true;
      this.stop = true;
    }
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.count}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>%</CalcButton>
            <CalcButton className="calc-operator" children='÷' onClick={this.OperatorState}>{'÷'}</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.NumberState}>7</CalcButton>
            <CalcButton className="calc-number" onClick={this.NumberState}>8</CalcButton>
            <CalcButton className="calc-number" onClick={this.NumberState}>9</CalcButton>
            <CalcButton className="calc-operator" onClick={this.OperatorState}>x</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.NumberState}>4</CalcButton>
            <CalcButton className="calc-number" onClick={this.NumberState}>5</CalcButton>
            <CalcButton className="calc-number" onClick={this.NumberState}>6</CalcButton>
            <CalcButton className="calc-operator" onClick={this.OperatorState}>-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.NumberState}>1</CalcButton>
            <CalcButton className="calc-number" onClick={this.NumberState}>2</CalcButton>
            <CalcButton className="calc-number" onClick={this.NumberState}>3</CalcButton>
            <CalcButton className="calc-operator" onClick={this.OperatorState}>+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" buttonName='bigger-btn' onClick={this.NumberState}>0</CalcButton>
            <CalcButton className="calc-number">.</CalcButton>
            <CalcButton className="calc-operator" onClick={this.OperatorState}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
