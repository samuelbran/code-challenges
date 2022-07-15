const longestCommonPrefix = require("../longestCommonPrefix");

describe("Longest Common Prefix", () => {
  test("It should return the shortest prefix", () => {
    const result = longestCommonPrefix(["flight", "flower", "flow"]);

    expect(result).toBe("fl");
  });

  test("It should return emty string", () => {
    const result = longestCommonPrefix(["dog", "racecar", "car"]);

    expect(result).toBe("");
  });
});
