const index = require('../index');

test('capitalize', () => {
  expect(index.capitalize("demo")).toBe("Demo");
  expect(index.capitalize("book")).toBe("Book");
});

test('reverse', () => {
  expect(index.reverse("demo")).toBe("omed");
  expect(index.reverse("hear")).toBe("raeh");
});