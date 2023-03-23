const chunk = require('../../src/arrays/chunk');
var _ = require('lodash');

describe('chunk', () => {
  test('creates an array of elements split into groups the length of size', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual(_.chunk(['a', 'b', 'c', 'd'], 2)),
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual(_.chunk(['a', 'b', 'c', 'd'], 3)),
    expect(chunk([1, 2, 3])).toEqual(_.chunk([1, 2, 3])),
    expect(chunk([])).toEqual(_.chunk([])),

    expect(() => chunk(1)).toThrow(TypeError),
    expect(() => chunk('string')).toThrow(TypeError),
    expect(() => chunk(false)).toThrow(TypeError),
    expect(() => chunk({})).toThrow(TypeError),

    expect(() => chunk(undefined)).toThrow(TypeError),
    expect(() => chunk(null)).toThrow(TypeError),
    expect(() => chunk(NaN)).toThrow(TypeError)
  })
})