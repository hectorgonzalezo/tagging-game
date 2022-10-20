import React, { useState, useRef, useEffect } from 'react';
import database from '../firebase';
import { string } from 'prop-types';

function SubmitScore({ time }) {
  const [name, setName] = useState('');
  const inputRef = useRef(null);
  const formRef = useRef(null);

  function updateName(e) {
    setName(e.target.value);
    e.target.setCustomValidity('');
  }

  function submit(e) {
    if (e.target.checkValidity()) {
      e.preventDefault();
      database.submitUserScore({ name, time });
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
      <button type="submit" onClick={addCustomValidity}>
        Submit score
      </button>
    </form>
  );
}

SubmitScore.propTypes = {
  time: string.isRequired,
};

export default SubmitScore;
