import React from 'react';
import Counter from './Counter';
import CharactersDisplay from './CharactersDisplay';
import '../styles/headerStyle.css';

function Header() {
  return (
    <header>
      <div>
        <h1 id="title">Hidden picture game</h1>
        <Counter />
        <CharactersDisplay />
      </div>
    </header>
  );
}

export default Header;
