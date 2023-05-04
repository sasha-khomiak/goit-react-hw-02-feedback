import React from 'react';
import { Popularity, Good, Neutral, Bad } from './PersentageLine.styled';

import PropTypes from 'prop-types';

const PersentageLine = ({ good, neutral, bad }) => {
  return (
    <Popularity>
      <Good persentGood={(good / (good + neutral + bad)) * 100}></Good>
      <Neutral
        persentNeutral={(neutral / (good + neutral + bad)) * 100}
      ></Neutral>
      <Bad persentBad={(bad / (good + neutral + bad)) * 100}></Bad>
    </Popularity>
  );
};

export default PersentageLine;

PersentageLine.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
