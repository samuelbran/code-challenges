const deepEqual = require("../deepEqual");

const valueA = {
  name: "Sam",
  rest: {
    lastName: "Bran",
  },
};

const valueB = {
  name: "Sam",
  rest: {
    lastName: "Bran",
  },
};

const valueC = "Samuel Bran";

const valueD = {
  name: "Sam",
  rest: {
    lastName: "García",
  },
};

const valueE = {
  age: 32,
  location: "San Salvador",
};

describe("Deep Equal", () => {
  test("It should return true, when comparing equal objects", () => {
    const response = deepEqual(valueA, valueB);

    expect(response).toBe(true);
  });

  test("It should return true, when comparing equal strings", () => {
    const response = deepEqual("sam", "sam");

    expect(response).toBe(true);
  });

  test("It should return false, when comparing object with string", () => {
    const response = deepEqual(valueA, valueC);

    expect(response).toBe(false);
  });

  test("It should return false, when comparing same objects with different values", () => {
    const response = deepEqual(valueA, valueD);

    expect(response).toBe(false);
  });

  test("It should return false, when comparing different objects", () => {
    const response = deepEqual(valueA, valueE);

    expect(response).toBe(false);
  });
});
