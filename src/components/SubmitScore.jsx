import React, { useState, useRef, useEffect } from 'react';
import { submitUserScore } from '../API/scores';
import { string, func } from 'prop-types';

function SubmitScore({ time, updateScores }) {
  const [name, setName] = useState('');
  const [disabled, setDisabled] = useState(false);
  const inputRef = useRef(null);
  const formRef = useRef(null);

  function updateName(e) {
    setName(e.target.value);
    e.target.setCustomValidity('');
  }

  async function submit(e) {
    if (e.target.checkValidity()) {
      e.preventDefault();
      const submitted = await submitUserScore(name, time);
      // If submitted correctly, disable button
      setDisabled(submitted);
      updateScores();
    }
  }

  // Set custom validity message on input
  function addCustomValidity() {
    if (!inputRef.current.validity.valid) {
      inputRef.current.setCustomValidity('Please write a name');
    }
  }

  return (
    <form action="" ref={formRef} onSubmit={submit}>
    <span>{disabled ? 'Score submited!' : ''}</span>
      <input
        type="text"
        name="name"
        minLength={1}
        maxLength={15}
        placeholder="Your name here"
        onChange={updateName}
        value={name}
        ref={inputRef}
        required
      />
      <button type="submit" onClick={addCustomValidity} disabled={disabled}>
        Submit score
      </button>
    </form>
  );
}

SubmitScore.defaultProps = {
  updateScores: () => {},
}

SubmitScore.propTypes = {
  time: string.isRequired,
  updateScores: func,
};

export default SubmitScore;
