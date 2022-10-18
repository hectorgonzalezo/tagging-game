import React from 'react';
import { render, screen, container } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Choices from '../components/Choices';
import CharactersContext from '../components/CharactersContext';

describe('Choices between characters', () => {
  test('Choices should be empty if context stays as initialized', async () => {
    const mockClose = jest.fn();

    render(<Choices closeTarget={mockClose} location={{ x: 10, y: 20 }} />);

    const closeButton = screen.getByRole('button', { name: 'x' });
    // there should be no option rendered, only the close button
    expect(closeButton).toBeInTheDocument();
    expect(screen.queryByRole('button')).toEqual(closeButton);
    expect(container).toMatchSnapshot();
  });

  test('When updating context, there should be a CharacterOption', async () => {
    const mockClose = jest.fn();
    render((
      <div>
        <CharactersContext.Provider value={['juan']}>
          <Choices closeTarget={mockClose} location={{ x: 10, y: 20 }}/>
        </CharactersContext.Provider>
      </div>
    ));

    // there should be no option rendered
    expect(screen.getByRole('button', { name: 'juan' })).toBeInTheDocument();
  });

  test('Clicking on close button calls closeTarget function', async () => {
    const mockClose = jest.fn();
    render((
      <div>
        <CharactersContext.Provider value={['juan']}>
          <Choices closeTarget={mockClose} location={{ x: 10, y: 20 }} />
        </CharactersContext.Provider>
      </div>
    ));

    userEvent.click(screen.getByRole('button', { name: 'x' }));

    expect(mockClose).toBeCalled();
  });
})