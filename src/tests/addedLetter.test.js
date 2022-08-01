const addedLetter = require("../addedLetter");

describe("Added Letter", () => {
  test("'abcd', 'ceadb' == e", () => {
    const response = addedLetter("abcd", "ceadb");

    expect(response).toBe("e");
  });

  test("'abbdd', 'dabadb' == b ", () => {
    const response = addedLetter("abbdd", "dabadb");

    expect(response).toBe("a");
  });

  test("'aaaa', 'aabaa' == b", () => {
    const response = addedLetter("aaaa", "aabaa");

    expect(response).toBe("b");
  });

  test("'ae', 'aae' == a", () => {
    const response = addedLetter("ae", "aae");

    expect(response).toBe("a");
  });
});
