const flattening = require("../flattening");

describe("Flattening Array of arrays", () => {
  test("It should flatten given array of arrays", () => {
    const response = flattening([[1], [2, 3], [4, 3], [2, 1]]);

    expect(response).toStrictEqual([1, 2, 3, 4, 3, 2, 1]);
  });
});
