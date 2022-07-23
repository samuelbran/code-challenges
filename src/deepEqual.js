const deepEqual = (valueA, valueB) => {
  let response =
    typeof valueA === "object" &&
    valueA !== null &&
    typeof valueB === "object" &&
    valueB !== null;

  if (response) {
    const propertiesOfA = Object.keys(valueA);
    const propertiesOfB = Object.keys(valueB);

    response = propertiesOfA.length === propertiesOfB.length;

    if (response) {
      for (let i = 0; i < propertiesOfA.length; i++) {
        response = propertiesOfA[i] === propertiesOfB[i];
      }

      if (response) {
        for (let j = 0; j < propertiesOfA.length; j++) {
          const elementOfA = valueA[propertiesOfA[j]];
          const elementOfB = valueB[propertiesOfB[j]];

          response = deepEqual(elementOfA, elementOfB);
        }
      }
    }
  } else {
    response = valueA === valueB;
  }

  return response;
};

module.exports = deepEqual;
