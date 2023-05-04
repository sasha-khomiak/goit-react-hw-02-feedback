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

  // обробник натиску кнопки Good
  handleClickGood = () => {
    this.setState(pevstate => {
      return { good: pevstate.good + 1 };
    });
  };

  // обробник натиску кнопки Neutral
  handleClickNeutral = () => {
    this.setState(prevstate => {
      return { neutral: prevstate.neutral + 1 };
    });
  };

  // обробник натиску кнопки Bad
  handleClickBad = () => {
    this.setState(prevstate => {
      return { bad: prevstate.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.neutral + this.state.good;
  };

  countPositiveFeedbackPercentage = () => {
    return Number.parseInt((this.state.good / this.countTotalFeedback()) * 100);
  };

  // Рендеринг компонента Container
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
          <p>Good</p> <span>{this.state.good}</span>
          <p>Neutral</p> <span>{this.state.neutral}</span>
          <p>Bad</p> <span>{this.state.bad}</span>
          <p>Total</p> <span>{this.countTotalFeedback()}</span>
          <p>Positive feedback</p>{' '}
          <span>{this.countPositiveFeedbackPercentage()} %</span>
        </div>
      </Container>
    );
  }
}

export default Statistics;
