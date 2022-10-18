import React from 'react';
import { string, number, objectOf, func} from 'prop-types';
import styled from 'styled-components';
import useCharacterChoice from '../hooks/useCharacterChoice';

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

function CharacterOption({ name, location, closeTarget }) {
  const { hit, checkChoice } = useCharacterChoice();

  return (
    // only check choice if it's not the close button
    <Option onClick={name !== 'x' ? () => checkChoice(location, name) : closeTarget}>{name}</Option>
  );
}

CharacterOption.defaultProps = {
  name: '',
  location: {},
};

CharacterOption.propTypes = {
  name: string,
  location: objectOf(number),
  closeTarget: func,
};

export default CharacterOption;
