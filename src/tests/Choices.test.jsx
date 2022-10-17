import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Choices from '../components/Choices';
import CharactersContext from '../components/CharactersContext';

describe('Choices between characters', () => {
  test('Choices should be empty if context stays as initialized', async () => {
    render(<Choices />);

    // there should be no option rendered
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  test('When updating context, there should be a CharacterOption', async () => {
    render((
      <div>
        <CharactersContext.Provider value={['juan']}>
          <Choices />
        </CharactersContext.Provider>
      </div>
    ));

    // there should be no option rendered
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
})