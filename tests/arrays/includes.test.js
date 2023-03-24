const includes = require('../../src/arrays/includes');
var _ = require('lodash');

describe('includes', () => {
  test.each([
    [[1, 2, 3], 1],
    [[1, 2, 3], 1, 2],
  ])("Checks if value is in collection. If collection is a string, it's checked for a substring of value, otherwise SameValueZero is used for equality comparisons", (array, value, fromIndex = 0) => {
    expect(includes(array, value, fromIndex)).toEqual(_.includes(array, value, fromIndex))
  });
  test.each([
    [1], ['string'], [false], [{}], [undefined], [null], [NaN]
  ])('includes errors', (value) => {
    expect(() => includes(value)).toThrow(TypeError)
  })
})