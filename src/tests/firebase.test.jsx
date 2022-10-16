/**
 * @jest-environment node
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import database from '../firebase';

describe('Database queries', () => {
  test('Correct results return true', async () => {
    // These coordinates are stored in database with a value of true
    expect(await database.lookForResult(100, 200)).toBe(true);
  });

  test('Incorrect results return false', async () => {
    expect(await database.lookForResult(500, 30)).toBe(false);
  });
});
