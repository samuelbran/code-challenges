/**
 *
 * @param {number} start - number
 * @param {number} end - number
 * @param {number} step - number
 * @return {number[]} number[]
 */
const range = (start, end, step) => {
  const result = [start];

  if (start > end) {
    for (let i = start; i >= end; step ? (i -= Math.abs(step)) : i--) {
      if (i < start) {
        result.push(i);
      }
    }
  } else {
    for (let i = start; i <= end; step ? (i += step) : i++) {
      if (i > start) {
        result.push(i);
      }
    }
  }

  return result;
};

/**
 *
 * @param {number[]} numbers
 * @return {number}
 */
const sum = (numbers) => {
  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }

  return result;
};

module.exports = {
  range,
  sum,
};
