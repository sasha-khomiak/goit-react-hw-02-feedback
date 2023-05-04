import React from 'react';

import { Container } from './Statistics.styled';

class Statistics extends React.Component {
  // значнен за замовчанням, якщо від пропсів нічого не прийде
  static defaultProps = {
    initialValueGood: 0,
    initialValueNeutral: 0,
    initialValueBad: 0,
  };

  // перевірка проп тайпів
  static propTyprs = {};

  // поточне значення state
  state = {
    good: this.props.initialValueGood,
    neutral: this.props.initialValueNeutral,
    bad: this.props.initialValueBad,
  };

  handleClickGood = () => {
    this.setState(pevstate => {
      return { good: pevstate.good + 1 };
    });
  };

  handleClickNeutral = () => {
    this.setState(prevstate => {
      return { neutral: prevstate.neutral + 1 };
    });
  };

  handleClickBad = () => {
    this.setState(prevstate => {
      return { bad: prevstate.bad + 1 };
    });
  };

  render() {
    return (
      <Container>
        <p>Please leave feedback</p>
        <div>
          <button type="button" onClick={this.handleClickGood}>
            Good
          </button>
          <button type="button" onClick={this.handleClickNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleClickBad}>
            Bad
          </button>
        </div>
        <p>Statistics</p>
        <div>
          <span>{this.state.good}</span>
          <span>{this.state.neutral}</span>
          <span>{this.state.bad}</span>
        </div>
      </Container>
    );
  }
}

export default Statistics;
