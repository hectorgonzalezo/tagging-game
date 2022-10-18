import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import comiconImg from '../assets/comicon.jpg';
import Target from './Target';
import TargetsContext from './TargetsContext';
import '../styles/mainImageStyle.css';

function MainImage() {
  // Target currently selected by user
  const [target, setTarget] = useState([]);
  // This will keep track of every correctGuess
  const [hits, setHits] = useState([]);
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

  function checkTarget(location, name) {
    setHits((prevHits) => [...prevHits, { location, name }]);
  }

  return (
    <TargetsContext.Provider value={checkTarget}>
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
      {hits.map((hit) => (
        <h1 key={hit}>hit</h1>
      ))}
    </div>
    </TargetsContext.Provider>
  );
}

export default MainImage;
