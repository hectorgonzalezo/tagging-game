import React, { useState } from 'react';
import uniqid from 'uniqid';
import comiconImg from '../assets/comicon.jpg';
import Target from './Target';
import '../styles/mainImageStyle.css';

function MainImage() {
  // Target currently selected by user
  const [target, setTarget] = useState([]);

  // This function allow the user to click on a location in image
  function clickLocation(e) {
    const { pageX, pageY } = e;
    setTarget([{ x: pageX, y: pageY }]);
  }

  // Deletes target from view
  function closeTarget() {
    setTarget([]);
  }

  return (
    <div id="img-container">
      <img
        src={comiconImg}
        alt="main"
        id="main-image"
        onClick={clickLocation}
      />
      {target.map((target) => (
        <Target
          key={`${target.x + uniqid()}-${target.y + uniqid()}`}
          location={target}
          closeTarget={closeTarget}
        />
      ))}
    </div>
  );
}

export default MainImage;
