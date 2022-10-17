import React, { useEffect } from 'react';
import styled from 'styled-components';
import useTimer from '../hooks/useTimer';
import formatTime from '../utils/formatTime';
import formaTime from '../utils/formatTime';

const Display = styled.h1`
 position: sticky;
 left: 200px;
`;

function Counter() {
  const timer = useTimer();
  // this is used to prevent the timer from starting twice
  let timerStarted = false;

  useEffect(() => {
    if (!timerStarted) {
      timer.start();
      timerStarted = true;
    }
  }, []);

  return (
    <Display>{ formatTime(timer.time)}</Display>
  );
}

export default Counter;
