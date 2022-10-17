import formatTime from '../utils/formatTime';

describe('Formate seconds into hours and minutes', () => {
  test('Outputs 1 second', () => {
    expect(formatTime(1)).toBe('0:00:01');
  });

  test('Outputs 59 seconds', () => {
    expect(formatTime(59)).toBe('0:00:59');
  });

  test('Outputs a minute', () => {
    expect(formatTime(60)).toBe('0:01:00');
  });
  test('Outputs 59 minutes with 59 seconds', () => {
    expect(formatTime((59 * 60) + 59)).toBe('0:59:59');
  });
  test('Outputs an hour', () => {
    expect(formatTime(60*60)).toBe('1:00:00');
  });

  test('Outputs all of them', () => {
    expect(formatTime((60 * 60 * 2) + (58 * 60) + 45)).toBe('2:58:45');
  });
});
