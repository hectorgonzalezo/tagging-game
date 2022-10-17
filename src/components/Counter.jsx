import React, { useEffect } from 'react';
import styled from 'styled-components';
import useTimer from '../hooks/useTimer';
import formatTime from '../utils/formatTime';

const Display = styled.h1`
  font-size: clamp(1.3rem, 3vw, 2rem);
  text-align: start;
  background-color: var(--dark-purple-2);
  padding: 10px;
  outline: 3px solid white;
  width: clamp(95px, 14vw,  150px);
  border-radius: 1rem;
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
