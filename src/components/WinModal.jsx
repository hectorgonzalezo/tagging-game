import React, { useState, useEffect } from 'react';
import '../styles/winModalStyle.css';
import uniqid from 'uniqid';
import { number, func } from 'prop-types';
import formatTime from '../utils/formatTime';
import SubmitScore from './SubmitScore';
import database from '../firebase';
import { uniqueId } from 'lodash';

function WinModal({ time, restartFunc }) {
  const [topScores, setTopScore] = useState([]);

  function updateTopScores(){
    database.getTopScores().then(scores => setTopScore(scores))
  }
  // On render or when submitting score, load top scores
  useEffect(() => {
    updateTopScores();
  }, [])
  return (
    <div id="win-modal-outer">
      <div id="win-modal-inner">
        <h1>High Scores</h1>
        <ul id="scores">
          {topScores.map((score, i) => (
            <li key={uniqid()}>
              {`${i + 1}. ${score.name} ${score.score}`}
            </li>
          ))}
        </ul>
        <button type="button" id="button-leaderboard">
          View Leaderboard
        </button>
        <h2>Time:</h2>
        <h3>{formatTime(time)}</h3>
        <button
          type="button"
          className="button"
          id="button-restart"
          onClick={restartFunc}
        >
          Restart
        </button>
        <SubmitScore time={formatTime(time)} updateScores={updateTopScores} />
      </div>
    </div>
  );
}

WinModal.propTypes = {
  time: number.isRequired,
  restartFunc: func.isRequired,
};

export default WinModal;
