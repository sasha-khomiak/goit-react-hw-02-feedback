import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './Feedback.styled';

// підключення компонентів
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import PersentageLine from './PersentageLine/PersentageLine';

// створення компоненту-класу Feedback
class Feedback extends React.Component {
  // значнен за замовчанням, якщо від пропсів нічого не прийде
  static defaultProps = {
    initialValueGood: 0,
    initialValueNeutral: 0,
    initialValueBad: 0,
  };

  // перевірка проп тайпів
  // не зрозумів як прописувать виніс в кінець
  static propTyprs = {};

  // поточне значення state
  state = {
    good: this.props.initialValueGood,
    neutral: this.props.initialValueNeutral,
    bad: this.props.initialValueBad,
  };

  // ф-ія обробник натискання кнопки. дивимося  яке value у currentTarget
  // і викликаємо відповідну функцію інкременту
  handleClick = e => {
    let { value } = e.currentTarget;

    if (value === 'good') {
      this.incrementGood();
    }

    if (value === 'neutral') {
      this.incrementNeutral();
    }

    if (value === 'bad') {
      this.incrementBad();
    }
  };

  // інкремент Good
  incrementGood = () => {
    this.setState(pevstate => {
      return { good: pevstate.good + 1 };
    });
  };

  // інкремент Neutral
  incrementNeutral = () => {
    this.setState(prevstate => {
      return { neutral: prevstate.neutral + 1 };
    });
  };

  // інкремент Bad
  incrementBad = () => {
    this.setState(prevstate => {
      return { bad: prevstate.bad + 1 };
    });
  };

  // розрахунок загальної кількості голосів
  countTotalFeedback = () => {
    return this.state.bad + this.state.neutral + this.state.good;
  };

  // розрахунок відсотку позитивних відгуків
  countPositiveFeedbackPercentage = () => {
    let percentage = 0;
    if (this.countTotalFeedback() !== 0) {
      percentage = Number.parseInt(
        (this.state.good / this.countTotalFeedback()) * 100
      );
    }
    return percentage;
  };

  // Рендеринг Container, який містить весь компонент фідбек
  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <>
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
              <PersentageLine
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
              />
            </>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}

// експорт компоненту Feedback, який вставимо, як окремий компонент в App
export default Feedback;

// перевірка проптайпів
Feedback.propTypes = {
  initialValueGood: PropTypes.number,
  initialValueNeutral: PropTypes.number,
  initialValueBad: PropTypes.number,
};
