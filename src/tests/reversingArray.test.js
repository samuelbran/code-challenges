const { reverseArray } = require("../reversingArray");

describe("Reverse Array func", () => {
  test("It should return [3,2,1]", () => {
    const response = reverseArray([1, 2, 3]);
    expect(response).toStrictEqual([3, 2, 1]);
  });
});

describe("Reverse Array In Place func", () => {
  test("It should return [3,2,1]", () => {
    const response = reverseArray([1, 2, 3]);
    expect(response).toStrictEqual([3, 2, 1]);
  });
});
