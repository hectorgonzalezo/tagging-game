import React, { useState } from 'react';
import uniqid from 'uniqid';
import comiconImg from '../assets/comicon.jpg';
import Target from './Target';
import '../styles/mainImageStyle.css';

function MainImage() {
  // Target currently selected by user
  const [target, setTarget] = useState([]);
  const [bullseye, setBullseye] = useState({});
  const [bullseyeActive, setBullseyeActive] = useState(true);
  const [bullseyeVisible, setBullseyeVisible] = useState(true);


  // This function allow the user to click on a location in image
  function clickLocation(e) {
    const { pageX, pageY } = e;
    setTarget([{ x: pageX, y: pageY }]);
    setBullseyeActive(false);
    setBullseyeVisible(false);
  }

  function locateBullseye(e) {
    const { pageX, pageY } = e;
    if (bullseyeActive) {
      setBullseye({ x: pageX, y: pageY });
    }
  }
  // Deletes target from view
  function closeTarget() {
    setTarget([]);
    setBullseyeActive(true);
    setBullseyeVisible(true);
  }

  return (
    <div id="img-container">
      <img
        src={comiconImg}
        alt="main"
        id="main-image"
        onClick={clickLocation}
        onMouseMove={locateBullseye}
      />
      {target.map((target) => (
        <Target
          key={`${target.x + uniqid()}-${target.y + uniqid()}`}
          location={target}
          closeTarget={closeTarget}
          className="target"
        />
      ))}
      <Target location={bullseye} className={bullseyeVisible ? "bullseye" : "hidden"} onClick={clickLocation} />
    </div>
  );
}

export default MainImage;
