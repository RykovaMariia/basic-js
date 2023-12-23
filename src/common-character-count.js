const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1.length === 0 || s2.length === 0) return 0;

  let count = 0;
  while (s1[0]) {
    let i2 = s2.indexOf(s1[0]);

    if (i2 >= 0) {
      s2 = s2.slice(0, i2) + s2.slice(i2 + 1);
      count++;
    }
    s1 = s1.slice(1);
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
