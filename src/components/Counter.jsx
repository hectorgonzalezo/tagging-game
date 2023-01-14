import React, { useEffect, useState } from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';
import formatTime from '../utils/formatTime';

const Display = styled.h1`
  font-size: clamp(0.9rem, 3vw, 2rem);
  text-align: start;
  padding: 10px;
  width: clamp(75px, 14vw,  150px);
`;

function Counter({ getTime, stop }) {
  // const timer = useTimer();
  const [time, setTime] = useState(0);
  const [loop, setLoop] = useState(undefined);
  // this is used to prevent the timer from starting twice
  let timerStarted = false;

  function restartTimer() {
    timerStarted = true;
    setTime(0);
    // leave space for scroll instructions
    setTimeout(() => {
      setLoop(
        setInterval(() => {
          if (!stop) {
            setTime((prevTime) => prevTime + 1);
          }
        }, 1000)
      );
    }, 4000);
  }

  function stopTimer() {
    clearInterval(loop);
    setLoop(undefined);
  }

  useEffect(() => {
    if (!timerStarted) {
      restartTimer();
    }
  }, []);

  useEffect(() => {
    if (!stop) {
      getTime(time);
    }
  });

  // Stop timer if sent true from .App
  useEffect(() => {
    if (stop) {
      stopTimer();
      timerStarted = false;
    } else if (!timerStarted) {
      restartTimer();
    }
  }, [stop]);

  return (
    <Display >{formatTime(time)}</Display>
  );
}

Counter.defaultProps = {
  getTime: () => {},
  stop: false,
};

Counter.propTypes = {
  getTime: func,
  stop: bool,
};

export default Counter;
