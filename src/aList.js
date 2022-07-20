const arrayToList = (arr) => {
  let list = {};

  for (let counter = arr.length; counter !== 0; counter--) {
    const value = arr[counter - 1];

    list = {
      value,
      rest: counter === arr.length ? null : list,
    };
  }

  return list;
};

const listToArray = (list) => {
  let array = [list.value];

  if (list.rest) {
    array = [...array, ...listToArray(list.rest)];
  }

  return array;
};

const prepend = (value, list) => {
  return {
    value,
    rest: list,
  };
};

const nth = (list, n) => {
  const array = listToArray(list);

  return array[n];
};

module.exports = {
  arrayToList,
  listToArray,
  prepend,
  nth,
};
