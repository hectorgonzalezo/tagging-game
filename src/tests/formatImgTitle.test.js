import formatImgTitle from '../utils/formatImgTitle';

describe('Formate seconds into hours and minutes', () => {
  test('lowercases single letter words', () => {
    expect(formatImgTitle('Boo')).toBe('boo');
  });

  test('joins words into a single one', () => {
    expect(formatImgTitle('Ghost Rider')).toBe('ghostrider');
  });
});
