import React from 'react';
import PropTypes from 'prop-types';

import { StatisticsWrap, Colum, Option, Result } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsWrap>
      <Colum>
        <Option>Good</Option> <Result>{good}</Result>
      </Colum>
      <Colum>
        <Option>Neutral</Option> <Result>{neutral}</Result>
      </Colum>
      <Colum>
        <Option>Bad</Option> <Result>{bad}</Result>
      </Colum>
      <Colum>
        <Option>Total</Option> <Result>{total}</Result>
      </Colum>
      <Colum>
        <Option>Positive feedback</Option>
        <Result>{positivePercentage} %</Result>
      </Colum>
    </StatisticsWrap>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
