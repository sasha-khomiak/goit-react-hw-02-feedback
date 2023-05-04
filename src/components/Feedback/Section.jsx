import React from 'react';
import { SectionWrap } from './Section.styled';

import PropTypes from 'prop-types';

const Section = props => {
  return (
    <SectionWrap>
      <h2>{props.title}</h2>
      {props.children}
    </SectionWrap>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
