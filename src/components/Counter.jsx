import React, { useEffect } from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';
import useTimer from '../hooks/useTimer';
import formatTime from '../utils/formatTime';

const Display = styled.h1`
  font-size: clamp(1.1rem, 3vw, 2rem);
  text-align: start;
  padding: 10px;
  width: clamp(75px, 14vw,  150px);
`;

function Counter({ getTime, stop }) {
  const timer = useTimer();
  // this is used to prevent the timer from starting twice
  let timerStarted = false;

  useEffect(() => {
    if (!timerStarted) {
      timer.start();
      timerStarted = true;
    }
  }, []);

  useEffect(() => {
    getTime(timer.time);
  });

  // Stop timer if sent true from .App
  useEffect(() => {
    console.log(stop)
    if (stop) {
      timer.stop();
    }
  }, [stop]);

  return (
    <Display>{ formatTime(timer.time)}</Display>
  );
}

Counter.defaultProps = {
  getTime: () => {},
};

Counter.propTypes = {
  getTime: func,
};

export default Counter;
