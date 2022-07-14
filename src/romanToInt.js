/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let intVal = 0;
  let nextIntVal = 0;

  for (let i = 0; i < s.length; i++) {
    intVal = dict[s[i]];

    if (i !== s.length + 1) {
      nextIntVal = dict[s[i + 1]];

      if (nextIntVal > intVal) {
        intVal = nextIntVal - intVal;
        i = i + 1;
      }
    }

    result = result + intVal;
  }

  return result;
};

module.exports = romanToInt;
