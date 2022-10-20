import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import SubmitScore from '../components/SubmitScore';
import database from '../firebase';
jest.mock('../firebase');

describe('Main image for the game', () => {

  test('Pressing the Submit score button calls function', async () => {
    render(<SubmitScore time="" />);
    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(database.submitUserScore).toBeCalled();
  });

  test('Pressing the Submit score sends correct user data', async () => {
    render(<SubmitScore time="" />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    userEvent.type(input, 'Juan');
    userEvent.click(button);

    // Correctly updates input value
    expect(input.value).toBe('Juan');
    expect(database.submitUserScore).toBeCalledWith({ name: 'Juan', time: '' });
  });
});
