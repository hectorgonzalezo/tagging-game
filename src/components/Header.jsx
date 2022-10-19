import React from 'react';
import Counter from './Counter';
import CharactersDisplay from './CharactersDisplay';
import { bool, func } from 'prop-types';
import '../styles/headerStyle.css';

function Header({ getTime, stop }) {
  return (
    <header>
      <div>
        <h1 id="title">Hidden picture game</h1>
        <Counter getTime={getTime} stop={stop} />
        <CharactersDisplay />
      </div>
    </header>
  );
}

Header.defaultProps = {
  getTime: () => {},
  stop: false,
};

Header.propTypes = {
  getTime: func,
  stop: bool,
};

export default Header;
