import { Component } from 'react';
import { Controls } from './Controls';
import { Value } from './Values';
import './Counter.css';

class Counter extends Component {
  static defaultProps = {
    initiateValue: 5,
  };
  state = {
    value: 0,
    biggerValue: 0,
    initiateValue: this.props.initiateValue,
  };
  incremenet = e => {
    // this.setState({value: 10})
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
        biggerValue: prevState.biggerValue + 10,
        initiateValue: prevState.initiateValue + 5,
      };
    });
  };

  decrement = e => {
    this.setState(prevState => ({
      value: prevState.value - 1,
      biggerValue: prevState.biggerValue - 10,
      initiateValue: prevState.initiateValue - 5,
    }));
  };
  render() {
    return (
      <div className="Counter">
        <Value
          value={this.state.value}
          biggerValue={this.state.biggerValue}
          initiateValue={this.state.initiateValue}
        />
        {/* <span className="Counter__value">{this.state.value}</span>
        <span className="Counter__value">{this.state.biggerValue}</span>
        <span className="Counter__value">{this.state.initiateValue}</span> */}
        <Controls onIncrement={this.incremenet} onDecrement={this.decrement} />
        {/* <div className="Counter__controls">
          <button type="button" onClick={this.incremenet}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.decrement}>
            Уменьшить на 1
          </button>
        </div> */}
      </div>
    );
  }
}

export default Counter;
