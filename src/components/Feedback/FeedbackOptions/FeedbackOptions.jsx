import React from 'react';

import PropTypes from 'prop-types';

import { Button, ButtonBlock } from './FeedbackOptions.Styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonBlock>
      {options.map(el => {
        return (
          <Button key={el} type="button" value={el} onClick={onLeaveFeedback}>
            {el}
          </Button>
        );
      })}
    </ButtonBlock>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
