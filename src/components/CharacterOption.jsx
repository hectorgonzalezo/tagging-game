import React, { useEffect, useContext } from 'react';
import { string, number, objectOf, func} from 'prop-types';
import styled from 'styled-components';
import useCharacterChoice from '../hooks/useCharacterChoice';
import TargetsContext from './TargetsContext';

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

  // Updates the targets and message in the main image when correctly guessing a target
  const updateMainImage = useContext(TargetsContext);

  useEffect(() => {
    if (hit) {
      updateMainImage(location, name);
    }
  }, [hit]);

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
