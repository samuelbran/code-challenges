/**
 * Retry
 *
 * Say you have a function primitiveMultiply that in 20 percent of cases mul-
 * tiplies two numbers and in the other 80 percent of cases raises an excep-
 * tion of type MultiplicatorUnitFailure. Write a function that wraps this clunky
 * funtion and just keeps trying until a call succeeds, after which it returns the
 * result.
 *
 * Make sure you handle only the exceptions you are trying to handle.
 */

class MultiplicatorUnitFailure extends Error {}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function primitiveMultiply(a, b) {
  const randomNumber = Math.floor(Math.random() * 10);

  if (randomNumber < 2) {
    return a * b;
  }

  throw new MultiplicatorUnitFailure();
}

function primitiveMultiplyWrapper(a, b) {
  let response;

  try {
    response = primitiveMultiply(a, b);
  } catch (error) {
    console.log("It failed...");
    if (error instanceof MultiplicatorUnitFailure) {
      console.log("Handling PrimitiveMultipyError...");
      response = primitiveMultiplyWrapper(a, b);
    }
  }

  return response;
}

const response = primitiveMultiplyWrapper(3, 3);
console.log(response);
