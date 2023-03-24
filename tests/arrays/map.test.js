const map = require("../../src/arrays/map");
var _ = require("lodash");

describe("map", () => {
  function exponentiate(value) {
    return value * value;
  }
  function calcSquareRoot(value) {
    return Math.sqrt(value);
  }
  test.each([
    [[4, 8], exponentiate],
    [[1, 2, 3], exponentiate],
    [[4, 9], calcSquareRoot],
    [[16], calcSquareRoot],
  ])(
    "Creates an array of values by running each element in array thru iteratee",
    (array, iteratee) => {
      expect(map(array, iteratee)).toEqual(_.map(array, iteratee));
    }
  );
  test.each([[1], ["string"], [false], [{}], [undefined], [null], [NaN]])(
    "map errors",
    (value) => {
      expect(() => map(value)).toThrow(TypeError);
    }
  );
});
