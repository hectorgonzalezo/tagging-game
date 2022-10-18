import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

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
});
