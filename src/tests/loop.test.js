const loop = require("../loop");

describe("My own loop", () => {
  test("Response should be 3", () => {
    let response = 0;
    let value = 0;

    const test = () => value < 3;
    const update = () => (value += 1);
    const body = () => (response += 1);

    loop(value, test, update, body);
    expect(response).toBe(3);
  });
});
