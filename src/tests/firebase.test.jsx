/**
 * @jest-environment node
 */

import '@testing-library/jest-dom';
import database from '../firebase';

describe('Database queries', () => {
  test('Correct results return true', async () => {
    // These coordinates are stored in database with a value of true
    expect(await database.lookForResult({ x: 1200, y: 400 }, 'Waldo')).toBe(true);
  });

  test('Incorrect results return false', async () => {
    expect(await database.lookForResult({ x: 500, y: 30 }, 'Juan')).toBe(false);
  });

  test('Coordinate exists but returns false if its the wrong character', async () => {
    // These coordinates are stored in database with a value of true
    expect(await database.lookForResult({ x: 1200, y: 400 }, 'Juan')).toBe(false);
  });

  test('Return true for 50 pixels surrounding character', async () => {
    // These coordinates are stored in database with a value of true
    expect(await database.lookForResult({ x: 1249, y: 351 }, 'Waldo')).toBe(true);
  });

  test('Find Rocko', async () => {
    // These coordinates are stored in database with a value of true
    expect(await database.lookForResult({ x: 1450, y: 1450 }, 'Rocko')).toBe(true);
  });

  test('Find QWOP', async () => {
    // These coordinates are stored in database with a value of true
    expect(await database.lookForResult({ x: 300, y: 480 }, 'QWOP')).toBe(true);
  });

  test('Find Jamie Hyneman', async () => {
    // These coordinates are stored in database with a value of true
    expect(await database.lookForResult({ x: 150, y: 250 }, 'Jamie Hyneman')).toBe(true);
  });

  test('Find Boo', async () => {
    // These coordinates are stored in database with a value of true
    expect(await database.lookForResult({ x: 450, y: 980 }, 'Boo')).toBe(true);
  });

  test('Find General Snoo', async () => {
    // These coordinates are stored in database with a value of true
    expect(await database.lookForResult({ x: 1250, y: 1300 }, 'General Snoo')).toBe(true);
  });

  test('Find Dwight Schrute', async () => {
    // These coordinates are stored in database with a value of true
    expect(await database.lookForResult({ x: 1170, y: 850 }, 'Dwight Schrute')).toBe(true);
  });

  test('Find Ghost Rider', async () => {
    // These coordinates are stored in database with a value of true
    expect(await database.lookForResult({ x: 1606, y: 300 }, 'Ghost Rider')).toBe(true);
  });

  test('Find Ariel', async () => {
    // These coordinates are stored in database with a value of true
    expect(await database.lookForResult({ x: 1855, y: 370 }, 'Ariel')).toBe(true);
  });

  test('Find Nurse Joker', async () => {
    // These coordinates are stored in database with a value of true
    expect(await database.lookForResult({ x: 315, y: 1420 }, 'Nurse Joker')).toBe(true);
  });

  test('Find No-face', async () => {
    // These coordinates are stored in database with a value of true
    expect(await database.lookForResult({ x: 1050, y: 1080 }, 'No-face')).toBe(true);
  });

  test('Find Tin Man', async () => {
    // These coordinates are stored in database with a value of true
    expect(await database.lookForResult({ x: 1880, y: 1080 }, 'Tin Man')).toBe(true);
  });

  test('Find Rick Grimes', async () => {
    // These coordinates are stored in database with a value of true
    expect(await database.lookForResult({ x: 850, y: 760 }, 'Rick Grimes')).toBe(true);
  });

  test('Find Captain America', async () => {
    // These coordinates are stored in database with a value of true
    expect(await database.lookForResult({ x: 106, y: 920 }, 'Captain America')).toBe(true);
  });
});
