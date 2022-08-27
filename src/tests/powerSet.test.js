const powerSet = require("../powerSet");

describe("Power Set in specific order", () => {
  it("Should match provided result", () => {
    const expectedResult = [
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3],
    ];
    const result = powerSet([1, 2, 3]);
    expect(result).toEqual(expectedResult);
  });

  it("Should match provided result part 2", () => {
    const expectedResult = [[], [0]];
    const result = powerSet([0]);
    expect(result).toEqual(expectedResult);
  });
});
