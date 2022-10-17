import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Option = styled.h1`
  outline: 1px solid white;
  padding: 3px;
  background-color: var(--space-cadet);
  font-size: 1.5rem;

  &:hover{
    background-color: var(--palatinate-purple);
    cursor: pointer;
  }

`;

function CharacterOption({ name }) {
  return (
    <Option>{name}</Option>
  );
}

CharacterOption.defaultProps = {
  name: '',
};

CharacterOption.propTypes = {
  name: string,
};

export default CharacterOption;
