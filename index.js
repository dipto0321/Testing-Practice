const capitalize = (str) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};

const reverse = str => str.split('').reverse().join('');

const calculator = (() => ({
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
}))();

module.exports = {
  capitalize,
  reverse,
  calculator,
};