const addedLetter = (string1, string2) => {
   let dict = {};

  for (let i = 0; i < string1.length; i++) {
    let currentLetter = string1[i];
    if (!dict[currentLetter]) {
      dict[currentLetter] = 1;
    } else {
      dict[currentLetter] += 1;
    }
  }

  for (let i = 0; i < string2.length; i++) {
    let count = 1;
    let currentLetter = string2[i];

    for (let j = i + 1; j < string2.length; j++) {
      if (string2[j] === currentLetter) count++;
    }
    if (count > dict[currentLetter]) return currentLetter;
  }
  return "";
};

module.exports = addedLetter;
