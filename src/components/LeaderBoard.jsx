import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import { func } from 'prop-types';
import database from '../firebase';
import loading from '../assets/loading.gif';

function LeaderBoard({ close }) {
  const [topScores, setTopScore] = useState([]);

  function updateTopScores(){
    database.getTopScores(true).then(scores => setTopScore(scores))
  }
  // On render or when submitting score, load top scores
  useEffect(() => {
    updateTopScores();
  }, []);

  return (
    <div id="leaderboard">
      <button type="button" onClick={close}>x</button>
      <h1>Leader Board</h1>
      <ul>
      {topScores.length === 0 ? <img src={loading} alt="" /> : null }
        {topScores.map((score, i) => (
          <li key={uniqid()}>
            <p>{i + 1}. </p>
            <p>{score.name}</p>
            <p>{score.score}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

LeaderBoard.propTypes = {
  close: func.isRequired,
}

export default LeaderBoard;
