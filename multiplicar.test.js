const mult = require('./multiplicar');

test('mult 5 * 5 to equal 25', () => {
  expect(mult(5, 5)).toBe(25);
});