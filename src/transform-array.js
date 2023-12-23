const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  try {
    const controlSequences = [
      "--discard-next",
      "--discard-prev",
      "--double-next",
      "--double-prev",
    ];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      let index = controlSequences.indexOf(arr[i]);
      switch (index) {
        case -1:
          result.push(arr[i]);
          break;
        case 0:
          i += 1;
          break;
        case 1:
          if(result.at(-1) === arr[i - 1] && arr[i - 1]){
            result.pop();
          }
          break;
        case 2:
          if(arr[i + 1]) {
            result.push(arr[i + 1]);
          }
          break;
        case 3:
          if(result.at(-1) === arr[i - 1] && arr[i - 1]) {
            result.push(result.at(-1));
          }
      }
    }
    if (!Array.isArray(arr)) {
      throw new Error("'arr' parameter must be an instance of the Array!");
    }
    return result;
  } catch (e) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform,
};
