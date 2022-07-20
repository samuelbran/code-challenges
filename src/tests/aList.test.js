const { arrayToList, listToArray, prepend, nth } = require("../aList");

describe("A List", () => {
  test("It should generate a list from an array", () => {
    const response = arrayToList([1, 2, 3]);

    expect(response).toStrictEqual({
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null,
        },
      },
    });
  });

  test("It should generate an array from a list", () => {
    const response = listToArray({
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null,
        },
      },
    });

    expect(response).toStrictEqual([1, 2, 3]);
  });

  test("It should add an item to the front of a list", () => {
    const response = prepend(0, {
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null,
        },
      },
    });

    expect(response).toStrictEqual({
      value: 0,
      rest: {
        value: 1,
        rest: {
          value: 2,
          rest: {
            value: 3,
            rest: null,
          },
        },
      },
    });
  });

  test("It should return the value at the given position", () => {
    const response = nth(
      {
        value: 1,
        rest: {
          value: 2,
          rest: {
            value: 3,
            rest: null,
          },
        },
      },
      1
    );

    expect(response).toBe(2);
  });
});
