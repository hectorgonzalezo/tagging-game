import React from 'react';
import { objectOf, number, func, string } from "prop-types";
import styled from 'styled-components';
import Choices from './Choices';

const Circle = styled.div`
  position: absolute;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  border: 3px dashed white;
  background-color:  rgba(171, 169, 169, 0.5);

  &.correct{
    border: 3px dashed white; 
    background-color: rgba(15, 15, 255,  0.5); 
  }

  &.hidden{
    display: none;
  }
`;

function Target({ location, closeTarget, className, onClick }) {
  // turn location into a position to be sent to style
  const positionStyle = {
    top: `${location.y - 100}px`,
    left: `${location.x - 25}px`,
  };

  return (
    <Circle
      style={positionStyle}
      className={className + ' target'}
      onClick={onClick}
      data-testid={className === 'target' ? 'target' : 'bullseye'}
    >
      {/* only add choices after clicking */}
      {className === 'target' ? <Choices closeTarget={closeTarget} location={location} /> : null}
    </Circle>
  );
}

Target.defaultProps = {
  closeTarget: () => {},
  className: '',
  onClick: () => {},
};

Target.propTypes = {
  location: objectOf(number).isRequired,
  closeTarget: func,
  className: string,
  onClick: func,
};

export default Target;
