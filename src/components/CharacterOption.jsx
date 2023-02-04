import React, {useState, useEffect, useContext } from 'react';
import { string, number, objectOf, func, bool } from 'prop-types';
import styled from 'styled-components';
import loadingGif from '../assets/loading.gif';
import useCharacterChoice from '../hooks/useCharacterChoice';
import TargetsContext from './TargetsContext';

const Option = styled.button`
  &.inactive{
    opacity: 0.5;
    pointer-events: none;
  }

  &.wrong{
    opacity: 0.6;
    background-color: rgba(180, 12, 12);
    &:hover{
      background-color: red;
      animation: shake 1s;
      background-color: rgba(180, 12, 12);
    }
    text-decoration: line-through;
  }

`;

function CharacterOption({ name, location, closeTarget, inactive }) {
  const { hit, checkChoice } = useCharacterChoice();
  const [searchingHit, setSearchingHit] = useState(false);
  // This will help with the styling when the guess is wrong
  const [clicked, setClicked] = useState(false);
  const [wrong, setWrong] = useState(false);

  // Updates the targets and message in the main image when correctly guessing a target
  const updateMainImage = useContext(TargetsContext);

  useEffect(() => {
    // on correct guess
    if (hit) {
      updateMainImage(location, name);
    } else if (clicked) {
      setWrong(true);
    }
  }, [hit]);

  return (
    // only check choice if it's not the close button
    <Option
      onClick={
        // if its not the close button
        name !== "x"
          ? async () => {
              setClicked(true);
              setSearchingHit(true);
              await checkChoice(location, name);
              setSearchingHit(false);
            }
          : closeTarget
      }
      className={`${inactive ? "inactive" : ""} ${wrong ? "wrong" : ""}`}
    >
      {searchingHit ? <img src={loadingGif} className="loading-hit" alt="loading" /> : name }
    </Option>
  );
}

CharacterOption.defaultProps = {
  name: '',
  location: {},
  closeTarget: () => {},
  inactive: false,
};

CharacterOption.propTypes = {
  name: string,
  location: objectOf(number),
  closeTarget: func,
  inactive: bool,
};

export default CharacterOption;
