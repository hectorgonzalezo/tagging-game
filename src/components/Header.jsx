import React from 'react';
import Counter from './Counter';
import CharatersDisplay from './CharactersDisplay';
import '../styles/headerStyle.css';

function Header() {
  return (
    <header>
      <div>
        <h1 id="title">Hidden picture game</h1>
        <Counter />
        <CharatersDisplay />
      </div>
    </header>
  );
}

export default Header;
