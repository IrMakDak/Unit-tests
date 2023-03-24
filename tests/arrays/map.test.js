const map = require('../../src/arrays/map');
var _ = require('lodash');

describe('map', () => {
  function square(value) {
    return value * value;
  }
  function squareRoot(value) {
      return Math.sqrt(value);
  }
  test.each([
    [[4, 8], square],
    [[1, 2, 3], square],
    [[4, 9], squareRoot],
    [[16], squareRoot],
  ])("Creates an array of values by running each element in array thru iteratee", (array, iteratee) => {
    expect(map(array, iteratee)).toEqual(_.map(array, iteratee))
  });
  test.each([
    [1], ['string'], [false], [{}], [undefined], [null], [NaN]
  ])('map errors', (value) => {
    expect(() => map(value)).toThrow(TypeError)
  })
})