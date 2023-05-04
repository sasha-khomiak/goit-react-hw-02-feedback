import React from 'react';

import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <div>{message}</div>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
