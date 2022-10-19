import React from 'react';
import { render, screen, container } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';
import CharactersContext from '../components/CharactersContext';

describe('Header functionality', () => {
  test('Header timer ticking', async () => {
    render(<Header />);
    const counter = screen.queryByRole('heading', { name: '0:00:00' });

    expect(counter).toBeInTheDocument();

    // After two seconds, update the timer
    await setTimeout(() => {
      expect(counter).toHaveDisplayValue('0:00:02');
    }, 2000);
  });

  test('Characters should be created and pictures added', () => {
    render(
      <CharactersContext.Provider value={[{ name:'Boo', guessed: false }]}>
        <Header />
      </CharactersContext.Provider>
    );

    const charactersDisplay = screen.queryAllByRole('listitem');
    expect(charactersDisplay[1].id).toBe('Boo-option');
  });

  test('Guessing correctly greys out a character', () => {
    render(
      <CharactersContext.Provider value={[{ name:'Boo', guessed: true }]}>
        <Header />
      </CharactersContext.Provider>
    );

    const charactersDisplay = screen.queryAllByRole('listitem');
    expect(charactersDisplay[1].id).toBe('Boo-option');
    // options should be greyed out
    expect(charactersDisplay[1]).toHaveStyle('opacity: 0.3');
  });
});
