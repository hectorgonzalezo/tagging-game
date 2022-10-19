import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import WinModal from '../components/WinModal';

describe('Modal after winning', () => {
  test('Correctly renders time', async () => {
    const mockFunc = jest.fn();
    render(<WinModal time={60} restartFunc={mockFunc} />);

    const timeDisplay = screen.queryByRole('heading', { name: '0:01:00' });

    expect(timeDisplay).toBeInTheDocument();
  });

  test('Pressing on restar button calls restartFunc', async () => {
    const mockFunc = jest.fn();
    render(<WinModal time={0} restartFunc={mockFunc} />);

    const restartButton = screen.getByRole('button', { name: 'Restart' });

    userEvent.click(restartButton);

    expect(mockFunc).toBeCalled();
  });
});
