const take = require('../../src/arrays/take');
var _ = require('lodash');

describe('take', () => {
  test.each([
    [[1, 2, 3]],
    [[1, 2, 3], 2],
    [[1, 2, 3], 5],
    [[1, 2, 3], 0]
  ])('creates a slice of array with n elements taken from the beginning', (array, number = 1) => {
    expect(take(array, number)).toEqual(_.take(array, number))
  });
  test.each([
    [1], ['string'], [false], [{}], [undefined], [null], [NaN]
  ])('take errors', (value) => {
    expect(() => take(value)).toThrow(TypeError)
  })
})