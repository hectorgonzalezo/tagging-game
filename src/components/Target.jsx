import React, { useState } from 'react';
import { objectOf, number } from 'prop-types';

function Target({ location }) {
  // turn location into a position to be sent to style
  const positionStyle = {
    top: `${location.y - 25}px`,
    left: `${location.x - 25}px`,
  };

  return (
    <div className="target" style={positionStyle}>
    </div>
  );
}

Target.propTypes = {
  location: objectOf(number).isRequired,
};

export default Target;
