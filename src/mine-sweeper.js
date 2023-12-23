const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = matrix.slice().map(el => el.map(sb => sb = 0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j]) {
       j - 1 >= 0 && (result[i][j - 1] += 1);
       j - 1 >= 0 && i - 1 >= 0 && (result[i - 1][j - 1] += 1);
       j - 1 >= 0 && i + 1 < matrix.length && (result[i + 1][j - 1] += 1);
       i - 1 >= 0 && (result[i - 1][j] += 1);
       i + 1 < matrix.length && (result[i + 1][j] += 1);
       j + 1 < matrix[i].length && (result[i][j + 1] += 1);
       j + 1 < matrix[i].length && i - 1 >= 0 && (result[i - 1][j + 1] += 1);
       j + 1 < matrix[i].length && i + 1 < matrix.length && (result[i + 1][j + 1] += 1);
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper,
};
