import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import comiconImg from '../assets/comicon.jpg';
import Target from './Target';
import CorrectGuess from './CorrectGuess';
import TargetsContext from './TargetsContext';
import '../styles/mainImageStyle.css';

function MainImage() {
  // Target currently selected by user
  const [target, setTarget] = useState({});
  // This will keep track of every correctGuess
  const [hits, setHits] = useState([]);
  const [bullseye, setBullseye] = useState({});
  const [bullseyeActive, setBullseyeActive] = useState(true);
  const [bullseyeVisible, setBullseyeVisible] = useState(true);


  // This function allow the user to click on a location in image
  function clickLocation(e) {
    console.log({e})
    const { pageX, pageY } = e;
    setTarget({ x: pageX, y: pageY });
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
    setTarget({});
    setBullseyeActive(true);
    setBullseyeVisible(true);
  }

  function checkTarget(location, name) {
    setHits((prevHits) => [...prevHits, { location, name }]);
    console.log('check')
  }

  // After a correct hit, remove previous target
  useEffect(() => {
    closeTarget();
  }, [hits]);

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
        {/* add target on click */}
        {target.hasOwnProperty('x') ? (
          <Target
            location={target}
            closeTarget={closeTarget}
            className="target"
          />
        ) : null}
        {/* add bulls eye */}
        <Target
          location={bullseye}
          className={bullseyeVisible ? "bullseye" : "hidden"}
          onClick={clickLocation}
        />
        {/* add correct guesses */}
        {hits.map((hit) => (
          <CorrectGuess
            key={hit.name}
            location={hit.location}
            name={hit.name}
          />
        ))}
      </div>
    </TargetsContext.Provider>
  );
}

export default MainImage;
