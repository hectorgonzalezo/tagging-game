import React, { useState, useContext } from 'react';
import { objectOf, number, func } from 'prop-types';
import styled from 'styled-components';
import Choices from './Choices';

const Circle = styled.div`
  position: absolute;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  outline: 5px dashed red;
`;

function Target({ location, closeTarget }) {
  // turn location into a position to be sent to style
  const positionStyle = {
    top: `${location.y - 25}px`,
    left: `${location.x - 25}px`,
  };

  return (
    <Circle style={positionStyle} className="target" data-testid="target">
      <Choices closeTarget={closeTarget} />
    </Circle>
  );
}

Target.propTypes = {
  location: objectOf(number).isRequired,
  closeTarget: func.isRequired,
};

export default Target;
