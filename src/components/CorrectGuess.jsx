import React from 'react';
import { objectOf, number, string } from 'prop-types';
import styled from 'styled-components';
import Target from './Target';

const Message = styled.h3`
position: absolute;
background-color: var(--midnight-green-eagle-green-3);
color: lightgrey;
padding: 5px;
border-radius: 1rem;
outline: 3px solid white;
width: 180px;
font-size: 1.3rem;
animation: shakeUp 1s;
top: ${(props) => {
  if(props.location.y > 1200){
  return`${props.location.y - 220}px` 
  } else {
  return `${props.location.y - 35}px`
  }
}};
left: ${(props) => `${props.location.x - 90}px`};
& > em{
  text-decoration: underline;
  font-style: italic;
  color: white;
  font-size: 1.5rem;
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
