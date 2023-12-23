const { it } = require('mocha');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxN = 0;
  for (let i = 1; i < n; i *= 10) {
    const item = Math.trunc(n / (10 * i)) * i + n % i;
    maxN = Math.max(maxN, item)
  }
  return maxN;
}
console.log(deleteDigit(4235));

module.exports = {
  deleteDigit
};
