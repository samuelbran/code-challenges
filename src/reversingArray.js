const reverseArray = (arr) => {
  const reversedArray = [];

  for (let i = arr.length; i !== 0; i--) {
    reversedArray.push(arr[i - 1]);
  }

  return reversedArray;
};

const reverseArrayInPlace = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const lastElement = arr.pop();
    arr.push(lastElement);
  }

  return arr;
};

module.exports = {
  reverseArray,
  reverseArrayInPlace,
};
