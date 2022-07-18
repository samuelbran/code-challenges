const isEven = require("../isEven");

describe("isEven function", () => {
  test("It should return true", () => {
    const result = isEven(50);

    expect(result).toBe(true);
  });

  test("It should return false", () => {
    const result = isEven(75);

    expect(result).toBe(false);
  });

  test("It should return true", () => {
    const result = isEven(-2);

    expect(result).toBe(true);
  });
});
