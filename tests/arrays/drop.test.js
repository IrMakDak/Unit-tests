const drop = require('../../src/arrays/drop');
var _ = require('lodash');

describe('drop', () => {
  test.each([
    [[1, 2, 3]],
    [[1, 2, 3], 2],
    [[1, 2, 3], 5],
    [[1, 2, 3], 0],
    [['a', 'b', 'c', 'd'], 3],
    [[null, 0, false, undefined, 'string', 1]],
  ])('creates a slice of array with n elements dropped from the beginning', (array, number = 1) => {
    expect(drop(array, number)).toEqual(_.drop(array, number))
  });
  test.each([
    [1], ['string'], [false], [{}], [undefined], [null], [NaN]
  ])('drop errors', (value) => {
    expect(() => drop(value)).toThrow(TypeError)
  })
})