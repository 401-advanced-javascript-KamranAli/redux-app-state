import React from 'react';
import PropTypes from 'prop-types';

const Start = ({ handleStart }) => {

  return (
    <div>
      <button onClick={handleStart}>Start Game</button>
    </div>
  )
};

Start.propTypes = {
  handleStart: PropTypes.func.isRequired
};
