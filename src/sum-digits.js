const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n ) {
  let sum = 0;
  const arr = JSON.stringify(n).split('');

  arr.forEach(el => sum += +el);
  let sumArray = JSON.stringify(sum);

  return sumArray.length > 1 ? getSumOfDigits(sum) : sum;

}

module.exports = {
  getSumOfDigits
};
