const loopingTriangle = require("../loopingTriangle");

describe("Looping Triangle", () => {
  test("It should draw the triangle", () => {
    const lTRes = loopingTriangle();
    const response = "#\n##\n###\n####\n#####\n######\n#######";
    expect(lTRes).toContain(response);
  });
});
