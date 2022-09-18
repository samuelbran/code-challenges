const removeDuplicates = require("../removeDuplicates");

describe("Remove duplicates function", () => {
  let nums = [];
  let expectedNums = [];
  let expectedK = 0;

  beforeEach(() => {
    // nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    // expectedNums = [0, 1, 2, 3, 4];
    // expectedK = 5;
    nums = [1, 1, 2];
    expectedNums = [1, 2];
    expectedK = 2;
  });

  it("returns uniques length", () => {
    const k = removeDuplicates(nums);
    expect(k).toEqual(expectedK);
  });

  it("reorders elements in place", () => {
    const k = removeDuplicates(nums);
    expect(nums.slice(0, k)).toEqual(expectedNums);
  });
});
