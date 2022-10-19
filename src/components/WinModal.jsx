import React from 'react';
import '../styles/winModalStyle.css';
import { number, func } from 'prop-types';
import formatTime from '../utils/formatTime';

function WinModal({ time, restartFunc }) {
  return (
    <div id="win-modal-outer">
      <div id="win-modal-inner">
        <h1>High Scores</h1>
        <ul id="scores">
          <li>1. Juan 0:00:01</li>
          <li>1. Juan 0:00:01</li>
          <li>1. Juan 0:00:01</li>
          <li>1. Juan 0:00:01</li>
          <li>1. Juan 0:00:01</li>
          <li>1. Juan 0:00:01</li>
          <li>1. Juan 0:00:01</li>
          <li>1. Juan 0:00:01</li>
          <li>1. Juan 0:00:01</li>
        </ul>
        <button type="button" id="button-leaderboard">View Leaderboard</button>
        <h2>Time:</h2>
        <h3>{formatTime(time)}</h3>
        <button type="button" className="button" id="button-restart" onClick={restartFunc}>
          Restart
        </button>
        <form action="">
          <input type="text" name="name" maxLength={20} placeholder="Name" />
          <button type="button">Submit score</button>
        </form>
      </div>
    </div>
  );
}

WinModal.propTypes = {
  time: number.isRequired,
  restartFunc: func.isRequired,
};

export default WinModal;
