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

const caesarCipher = (s, k) => {
  const sArr = s.split("");
  const small = "abcdefghijklmnopqrstuvwxyz";
  const capital = small.toUpperCase();
  return sArr.map((letter) => {
    const A = "A".charCodeAt(0);
    const Z = "Z".charCodeAt(0);
    const a = "a".charCodeAt(0);
    const z = "z".charCodeAt(0);
    const l = letter.charCodeAt(0);
    const enc = l + k;
    if (!small.includes(letter) && !capital.includes(letter)) return letter;
    if (small.includes(letter)) {
      return (
        enc <= z ? String.fromCharCode(enc) : String.fromCharCode(((l - a + k) % 26) + a)
      );
    }
    if (capital.includes(letter)) {
      return (
        enc <= Z ? String.fromCharCode(enc) : String.fromCharCode(((l - A + k) % 26) + A)
      );
    }
  }).join("");
};

const arrayAnalyzer = arr => ({
  average: (arr.reduce((a, b) => a + b) / arr.length),
  min: Math.min(...arr),
  max: Math.max(...arr),
  length: arr.length,
});

module.exports = {
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  arrayAnalyzer,
};