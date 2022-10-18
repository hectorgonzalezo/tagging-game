import React from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';

const Option = styled.button`
  outline: 1px solid white;
  padding: 5px;
  background-color: var(--space-cadet);
  font-size: 1.1rem;
  color:  white;
  border: none;
  border-radius: 1rem;
  box-shadow: 2px 2px 4px black;

  &:hover{
    background-color: var(--palatinate-purple);
    cursor: pointer;
  }

`;

function CharacterOption({ name, onClick }) {
  return (
    <Option onClick={onClick}>{name}</Option>
  );
}

CharacterOption.defaultProps = {
  name: '',
};

CharacterOption.propTypes = {
  name: string,
  onClick: func.isRequired,
};

export default CharacterOption;
