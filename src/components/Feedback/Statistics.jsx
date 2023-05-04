import React from 'react';
import PropTypes from 'prop-types';

import { StatisticsWrap, Colum } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsWrap>
      <Colum>
        <p>Good</p> <span>{good}</span>
      </Colum>
      <Colum>
        <p>Neutral</p> <span>{neutral}</span>
      </Colum>
      <Colum>
        <p>Bad</p> <span>{bad}</span>
      </Colum>
      <Colum>
        <p>Total</p> <span>{total}</span>
      </Colum>
      <Colum>
        <p>Positive feedback</p>
        <span>{positivePercentage} %</span>
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
