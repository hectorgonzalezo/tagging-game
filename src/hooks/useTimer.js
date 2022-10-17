import React, { useState } from 'react';

function useTimer() {
  const [time, setTime] = useState(0);

  function start() {
    setTime(0);
    setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
  }

  return { time, start };
}

export default useTimer;
