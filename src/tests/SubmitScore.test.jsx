
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import SubmitScore from '../components/SubmitScore';
import { submitUserScore } from '../API/scores';
jest.mock('../API/scores');

describe('Sumbit form', () => {
  test('Pressing the Submit score button calls function', async () => {
    render(<SubmitScore time="" />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    userEvent.type(input, 'Juan');
    await act(async () => userEvent.click(button));

    expect(submitUserScore).toBeCalled();
  });

  test('Pressing the Submit score sends correct user data', async () => {
    render(<SubmitScore time="" />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    userEvent.type(input, 'Juan');
    await act(async () => userEvent.click(button));

    // Correctly updates input value
    expect(input.value).toBe('Juan');
    expect(submitUserScore).toBeCalledWith("Juan", "");
  });
});
