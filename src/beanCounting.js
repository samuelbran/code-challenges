/**
 *
 * @param {string} word
 * @param {string} needle
 * @return {number}
 */
const countChar = (word, needle) => {
  let counter = 0;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLocaleLowerCase();
    if (letter === needle) counter += 1;
  }

  return counter;
};

module.exports = countChar;
