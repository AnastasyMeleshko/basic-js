const { NotImplementedError } = require('../extensions/index.js');

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
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (((arr[i]) && (arr[i] !== true) && (typeof (arr[i]) === "string")) || ((arr[i]) && (arr[i] !== true) && (typeof (arr[i]) === "number"))) {
      if (typeof (arr[i]) === "number") {
        resultArr.push(arr[i]);
        if ((arr[i-1] === "--discard-next") && (arr[i+1]) && (typeof(arr[i]) === "number") && (arr[i+1] === "--discard-prev") && ((typeof(arr[i-2]) === "number")))  {
          resultArr.push(arr[i-2]);
        }
        if ((arr[i-1] === "--discard-next") && (arr[i]) && (typeof(arr[i]) === "number")) {
          resultArr.pop();
        }
      }
      if ((arr[i] === "--discard-prev") && (arr[i - 1]) && (typeof(arr[i - 1]) === "number")) {
        resultArr.pop();
      }
      if ((arr[i] === "--double-prev") && (arr[i - 1]) && (typeof(arr[i - 1]) === "number") && (arr[i - 2] !== '--discard-next')) {
        resultArr.push(arr[i - 1]);
      }
      if ((arr[i] === "--double-next") && (arr[i+1]) && (typeof(arr[i + 1]) === "number")) {
        resultArr.push(arr[i+1]);
      }

    }
  }
  return resultArr;
}


module.exports = {
  transform
};
