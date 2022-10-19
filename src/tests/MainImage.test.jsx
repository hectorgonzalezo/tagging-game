import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import MainImage from '../components/MainImage';
import CharactersContext from '../components/CharactersContext';

describe('Main image for the game', () => {
  const mockGuessFunc = jest.fn()
  test('Pressing anywhere adds a target', async () => {
    render(<MainImage guessFunc={mockGuessFunc}/>);
    const image = screen.getByRole('img');

    userEvent.click(image);

    // After click there should be a target
    const target = screen.getByTestId('target');

    expect(target).toBeInTheDocument();
  });

  test('Only a single target after multiple clicks', async () => {
    render(<MainImage guessFunc={mockGuessFunc}/>);
    const image = screen.getByRole('img');

    userEvent.click(image);
    userEvent.click(image, { pageX: 10, pageY: 20 });
    userEvent.click(image, { pageX: 50, pageY: 600 });

    const target = screen.getAllByTestId('target');

    expect(target.length).toBe(1);
    expect(image).toMatchSnapshot();
  });

  test('Clicking on close button on target will close it', async () => {
    render(<MainImage guessFunc={mockGuessFunc}/>);
    const image = screen.getByRole('img');

    // Add a target
    userEvent.click(image);

    // Press close target button
    const closeButton = screen.getByRole('button', { name: 'x' });
    userEvent.click(closeButton);

    const target = screen.queryByTestId('target');
    expect(target).not.toBeInTheDocument();
    expect(image).toMatchSnapshot();
  });

  test('Clicking on a correct target, adds a CorrectGuess', async () => {
    render(
      <CharactersContext.Provider value={[{name: 'General Snoo', guessed: false }]} >
        <MainImage guessFunc={mockGuessFunc}/>
      </CharactersContext.Provider>
    );
    const image = screen.getByRole('img');

    // Add a target
    userEvent.click(image, { pageX: 1293, pageY: 1340 });

    // Press close target button
    const generalSnooButton = screen.getByRole('button', { name: 'General Snoo' });
    userEvent.click(generalSnooButton);

    // Find CorrectGuess after database lookup
    setTimeout(() => {
      const correctGuess = screen.queryByTestId('correctGuess');
      expect(correctGuess).toBeInTheDocument();
      expect(image).toMatchSnapshot();
    }, 0);
  });

  test('Clicking on a correct target calls guessFunc function', async () => {
    const mockFunc = jest.fn();
    render(
      <CharactersContext.Provider value={[{name: 'General Snoo', guessed: false }]} >
        <MainImage guessFunc={mockFunc} />
      </CharactersContext.Provider>
    );
    const image = screen.getByRole('img');

    // Add a target
    userEvent.click(image, { pageX: 1293, pageY: 1340 });

    // Press close target button
    const generalSnooButton = screen.getByRole('button', { name: 'General Snoo' });
    userEvent.click(generalSnooButton);

    setTimeout(() => {
      expect(mockFunc).toBeCalled();
    }, 0);
  });

  test('Clicking on a wrong target doesnt adds a CorrectGuess', async () => {
    render(
      <CharactersContext.Provider value={[{name: 'General Snoo', guessed: false }]} >
        <MainImage guessFunc={mockGuessFunc}/>
      </CharactersContext.Provider>
    );
    const image = screen.getByRole('img');

    // Add a target
    userEvent.click(image, { pageX: 100, pageY: 100 });

    // Press close target button
    const generalSnooButton = screen.getByRole('button', { name: 'General Snoo' });
    userEvent.click(generalSnooButton);

    // Doesnt CorrectGuess after database lookup
    setTimeout(() => {
      const correctGuess = screen.queryByTestId('correctGuess');
      expect(correctGuess).not.toBeInTheDocument();
      expect(image).toMatchSnapshot();
    }, 0);
  });
});
