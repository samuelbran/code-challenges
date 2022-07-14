const romanToInt = require("../romanToInt");

describe("romanToInt function", () => {
  test("It returns the expected value int", () => {
    expect(romanToInt("XVIII")).toBe(18);
  });
});
