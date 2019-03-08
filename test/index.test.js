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

// Test for caesar Cipher
test('caesarCipher', () => {
  expect(index.caesarCipher('middle-Outz', 2)).toBe('okffng-Qwvb');
  expect(index.caesarCipher('microverse.>?', 7)).toBe('tpjyvclyzl.>?');
  expect(index.caesarCipher('Microverse', 7)).toBe('Tpjyvclyzl');
});

//  Test for array analyzer

test('arrayAnalyzer', () => {
  expect(index.arrayAnalyzer([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
  expect(index.arrayAnalyzer([2, 49, 100, 58])).toEqual({
    average: 52.25,
    min: 2,
    max: 100,
    length: 4
  });
});