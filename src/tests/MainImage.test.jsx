import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import MainImage from '../components/MainImage';

describe('Main image for the game', () => {
  test('Pressing anywhere adds a target', async () => {
    render(<MainImage />);
    const image = screen.getByRole('img');

    userEvent.click(image);
    screen.debug();

    // After click there should be a target
    const target = screen.getByTestId('target');

    expect(target).toBeInTheDocument();
  });

  test('Only a single target after multiple clicks', async () => {
    render(<MainImage />);
    const image = screen.getByRole('img');

    userEvent.click(image);
    userEvent.click(image, { pageX: 10, pageY: 20 });
    userEvent.click(image, { pageX: 50, pageY: 600 });

    const target = screen.getAllByTestId('target');

    expect(target.length).toBe(1);
    expect(image).toMatchSnapshot();
  });

  test('Clicking on close button on target will close it', async () => {
    render(<MainImage />);
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
});
