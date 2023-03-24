
const chunk = require('../../src/arrays/chunk');
var _ = require('lodash');

describe('chunk', () => {
  test.each([
    [['a', 'b', 'c', 'd'], 2],
    [['a', 'b', 'c', 'd'], 3],
    [[1, 2, 3]],
    [[]],
  ])('Creates an array of elements split into groups the length of size', (array, number = 1) => {
    expect(chunk(array, number)).toEqual(_.chunk(array, number));
  })
  test.each([
    [1], ['string'], [false], [{}], [undefined], [null], [NaN]
  ])('chunk errors', (value) => {
    expect(() => chunk(value)).toThrow(TypeError)
  })
})