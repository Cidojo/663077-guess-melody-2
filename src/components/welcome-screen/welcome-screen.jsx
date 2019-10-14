import * as React from 'react';
import * as PropTypes from 'prop-types';

export const WelcomeScreen = (props) => {
  return (
    <div>{ props.message }</div>
  );
};

WelcomeScreen.propTypes = {
  message: PropTypes.string
};
