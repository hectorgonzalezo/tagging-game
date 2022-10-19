import React, { useState } from 'react';

function useTimer() {
  const [time, setTime] = useState(0);
  let loop;

  function start() {
    setTime(0);
    loop = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
  }

  function stop() {
    clearInterval(loop);
  }

  return { time, start, stop };
}

export default useTimer;
