const addedLetter = (ogString, altString) => {
  let altStringArr = [];

  for (let index = 0; index < altString.length; index++) {
    altStringArr.push(altString[index]);
  }

  for (let index = 0; index < ogString.length; index++) {
    const letter = ogString[index];
    const isInOgString = altStringArr.indexOf(letter);

    if (isInOgString >= 0) {
      altStringArr.splice(isInOgString, 1);
    }
  }

  return altStringArr[0];
};

module.exports = addedLetter;
