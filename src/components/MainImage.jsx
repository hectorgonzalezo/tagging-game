import React, { useState } from 'react';
import comiconImg from '../assests/comicon.jpg';
import Target from './Target';
import '../styles/mainImageStyle.css';

function MainImage() {
  // This will have the targets chosen by user, both wrong and right
  const [targets, setTarget] = useState([]);

  // This function allow the user to click on a location in image
  function clickLocation(e) {
    console.log(e)
    const { pageX, pageY } = e;
    setTarget([...targets, { x: pageX, y: pageY }]);
  }
  return (
    <div id="img-container">
      <img src={comiconImg} alt="" id="main-image" onClick={clickLocation}/>
      {targets.map((target) => <Target key={`${target.x}-${target.y}`} location={target} />)}
    </div>
  );
}

export default MainImage;
