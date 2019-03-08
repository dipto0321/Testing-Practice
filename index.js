const capitalize = (str) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};

const reverse = (str) => str.split('').reverse().join('');

module.exports = {
  capitalize,
  reverse,
}