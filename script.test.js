const { validateCred, findInvalidCards } = require('./script.js');

describe('checks if number is valid', () => {
  it('should return true', () => {
    const valid = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
    expect(validateCred(valid)).toBe(true);
  });
  it('should return false', () => {
    const invalid = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
    expect(validateCred(invalid)).toBe(false);
  });
});

describe('findInvalidCards()', () => {
  test('function is defined', () => {
    expect(findInvalidCards).toBeDefined();
  });
  it('should return an array of invalid credit card numbers', () => {
    const valid = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
    const invalid = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
    const batch = [valid, invalid];
    expect(findInvalidCards(batch)).toEqual([valid]);
  });
});
