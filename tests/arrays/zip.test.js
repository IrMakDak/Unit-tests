const zip = require('../../src/arrays/zip');
var _ = require('lodash');

describe('zip', () => {
  test.each([
    [['a', 'b'], [1, 2], [true, false]],
    [[]],
    [[1, 2], [3, 4]],
    [[1, 2], [2, 3], [3, 4]],
  ])('Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on', (arrays) => {
    expect(zip(arrays)).toEqual(_.zip(arrays))
  });
  test.each([
    [1], ['string'], [false], [{}], [undefined], [null], [NaN]
  ])('zip errors', (value) => {
    expect(() => zip(value)).toThrow(TypeError)
  })
})
