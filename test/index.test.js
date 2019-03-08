const index = require('../index');

test('capitalize', () => {
  expect(index.capitalize("demo")).toBe("Demo");
  expect(index.capitalize("book")).toBe("Book");
});

test('reverse', () => {
  expect(index.reverse("demo")).toBe("omed");
  expect(index.reverse("hear")).toBe("raeh");
});

describe('calculator', () => {
  test('add', () => {
    expect(index.calculator.add(3, 4)).toBe(7);
  });
  test('subtract', () => {
    expect(index.calculator.subtract(4, 3)).toBe(1);
  });
  test('multiply', () => {
    expect(index.calculator.multiply(4, 3)).toBe(12);
  });
  test('divide', () => {
    expect(index.calculator.divide(4, 2)).toBe(2);
  });
});