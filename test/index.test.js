const index = require('../index');

test('capitalize', () => {
  expect(index.capitalize("demo")).toBe("Demo");
  expect(index.capitalize("book")).toBe("Book");
});