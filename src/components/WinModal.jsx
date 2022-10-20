import React, { useState, useEffect } from 'react';
import '../styles/winModalStyle.css';
import uniqid from 'uniqid';
import { number, func } from 'prop-types';
import formatTime from '../utils/formatTime';
import SubmitScore from './SubmitScore';
import LeaderBoard from './LeaderBoard';
import database from '../firebase';

function WinModal({ time, restartFunc }) {
  const [topScores, setTopScore] = useState([]);
  const [leaderboardVisible, setLeaderboardVisible] = useState(false);

  function updateTopScores(){
    database.getTopScores(true).then(scores => setTopScore(scores)) 
  }

  function toggleLeaderboard(){
    setLeaderboardVisible(prevVisibility => !prevVisibility);
  }
  // On render or when submitting score, load top scores
  useEffect(() => {
    updateTopScores();
  }, [])

  if (!leaderboardVisible) {
    return (
      <div id="win-modal-outer">
        <div id="win-modal-inner">
          <h1>High Scores</h1>
          <ul id="scores">
            {topScores.map((score, i) => (
              <li key={uniqid()}>
                <p>{i+1}. </p>
                <p>{score.name}</p>
                <p>{score.score}</p>
              </li>
            ))}
          </ul>
          <button type="button" id="button-leaderboard" onClick={toggleLeaderboard}>
            View Leader Board
          </button>
          <h2>Time:</h2>
          <h3>{formatTime(time)}</h3>
          <button
            type="button"
            className="button"
            id="button-restart"
            onClick={restartFunc}
          >
            Restart game
          </button>
          <SubmitScore time={formatTime(time)} updateScores={updateTopScores} />
        </div>
      </div>
    );
  } else {
    return (
      <div id="win-modal-outer">
        <LeaderBoard close={toggleLeaderboard} />
      </div>
    );
  }

 
}

WinModal.propTypes = {
  time: number.isRequired,
  restartFunc: func.isRequired,
};

export default WinModal;
