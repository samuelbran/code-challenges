/**
 *
 * @param {number} n
 * @return {boolean}
 */
const isEven = (n) => {
  const absN = Math.abs(n);

  if (absN > 1) {
    return isEven(absN - 2);
  } else {
    return absN === 0;
  }
};

module.exports = isEven;
