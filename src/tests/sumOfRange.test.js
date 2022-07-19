const { range, sum } = require("../sumOfRange");

describe("Tests range function", () => {
  test("It should return [2, 3, 4, 5]", () => {
    const response = range(2, 5);

    expect(response.length).toBe(4);
    expect(response[0]).toBe(2);
    expect(response[1]).toBe(3);
    expect(response[2]).toBe(4);
    expect(response[3]).toBe(5);
  });

  test("It should return [1, 3, 5, 7, 9]", () => {
    const response = range(1, 10, 2);

    expect(response.length).toBe(5);
    expect(response[0]).toBe(1);
    expect(response[1]).toBe(3);
    expect(response[2]).toBe(5);
    expect(response[3]).toBe(7);
    expect(response[4]).toBe(9);
  });

  test("It should return [10, 8, 6, 4, 2]", () => {
    const response = range(10, 2, -2);

    expect(response.length).toBe(5);
    expect(response[0]).toBe(10);
    expect(response[1]).toBe(8);
    expect(response[2]).toBe(6);
    expect(response[3]).toBe(4);
    expect(response[4]).toBe(2);
  });

  test("It should return [5, 4, 3, 2]", () => {
    const response = range(5, 2);

    expect(response.length).toBe(4);
    expect(response[0]).toBe(5);
    expect(response[1]).toBe(4);
    expect(response[2]).toBe(3);
    expect(response[3]).toBe(2);
  });
});

describe("Tests sum function", () => {
  test("It should return 55", () => {
    const numbers = range(1, 10);
    const response = sum(numbers);

    expect(response).toBe(55);
  });
});
