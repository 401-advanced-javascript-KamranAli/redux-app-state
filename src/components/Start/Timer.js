import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Store from '../store';

const Timer = ({ reset }) => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(time > 0) setTime(time => time - 1);
      if(time === 0) {
        clearTimeout(timer);
        reset(false);
        Store.dispatch({
          type: 'RESET',
          payload: 0
        });
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [time]);
  return (
    <p>
      {time}
    </p>
  );
};

Timer.propTypes = {
  reset: PropTypes.func.isRequired
};

export default Timer;
