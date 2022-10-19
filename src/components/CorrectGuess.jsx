import React from 'react';
import { objectOf, number, string } from 'prop-types';
import styled from 'styled-components';
import Target from './Target';

const Message = styled.h3`
position: absolute;
background-color: var(--palatinate-purple);
color: lightgrey;
padding: 5px;
border-radius: 1rem;
outline: 3px solid white;
width: 100px;
z-index: 1;
top: ${(props) => `${props.location.y + 35}px`};
left: ${(props) => `${props.location.x - 50}px`}};

& > em{
  text-decoration: underline;
  font-style: italic;
  color: white;
  font-size: 1.1rem;
}
`;

function CorrectGuess({ location, name }) {
  return (
    <>
      <Message location={location} data-testid="correctGuess">
        Awesome! <em>{name}</em> is here.
      </Message>
      <Target key={name} location={location} className="correct" />
    </>
  );
}

CorrectGuess.propTypes = {
  location: objectOf(number).isRequired,
  name: string.isRequired,
};

export default CorrectGuess;
