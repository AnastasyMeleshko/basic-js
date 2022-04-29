const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // let sum = 0;
  // let checkArr = [];
  // matrix.forEach((arr, i) => {
  //   if (i === 0) {
  //     sum = sum + arr[i];
  //     if (arr[i] === 0) {
  //       checkArr.push(true);
  //     } else {
  //       checkArr.push(false);
  //     }
  //   } else {
  //     if (!checkArr[i]) {
  //       sum = sum + arr[i];
  //     }
  //   }
  //
  //
  //
  // })
}

module.exports = {
  getMatrixElementsSum
};
