import React from 'react';
import '../styles/instructionsStyle.css';

function Instructions() {
  return (
    <div id="instructions-outer">
      <div id="instructions-inner">
        <ul name="instructions" id="instructions-dropdown">
          <li>
            <h2>?</h2>
            <ul>
              <li>
                Find the characters shown in the menu located on the top right
                of the screen.
              </li>
              <li>
                Click anywhere in the image and select the character from the
                menu.
              </li>
              <li>Can you make your way into the high scores?</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
 
}

export default Instructions;
