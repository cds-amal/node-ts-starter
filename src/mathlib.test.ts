import { plus, subtract } from './mathlib';

test('adds 1 + 2 to equal 3', () => {
  expect(plus(1, 2)).toBe(3);
});

test('adds .1 + .2 to equal .3', () => {
  // https://jestjs.io/docs/expect#tobeclosetonumber-numdigits
  expect(plus(0.1, 0.2)).toBeCloseTo(0.3);
});
