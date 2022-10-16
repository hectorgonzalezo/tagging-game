import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import MainImage from '../components/MainImage';

describe('Database queries', () => {
  test('Pressing anywhere adds a target', async () => {
    render(<MainImage />);
    const image = screen.getByRole('img');

    userEvent.click(image);

    // After click there should be a target
    const target = screen.getAllByRole('generic');
    expect(target[2]).toHaveClass('target');
  });

  test('Adds multiple targets', async () => {
    render(<MainImage />);
    const image = screen.getByRole('img');

    userEvent.click(image);
    userEvent.click(image, { screenX: 10, screenY: 20 });
    userEvent.click(image, { screenX: 50, screenY: 600 });

    const target = screen.getAllByRole('generic');
    // There should be 5 divs after three clicks
    expect(target.length).toBe(5);
  });
});
