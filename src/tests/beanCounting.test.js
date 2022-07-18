const countChar = require("../beanCounting");

describe("B Counting", () => {
  test("It should return 4", () => {
    const response = countChar("Jose Samuel Bran Garcia", "a");

    expect(response).toBe(4);
  });
});
