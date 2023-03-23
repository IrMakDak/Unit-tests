const includes = require('../../src/arrays/includes');
var _ = require('lodash');

describe('includes', () => {
  test("Checks if value is in collection. If collection is a string, it's checked for a substring of value, otherwise SameValueZero is used for equality comparisons", () => {

    expect(includes([1, 2, 3], 1)).toEqual(_.includes([1, 2, 3], 1)),
    expect(includes([1, 2, 3], 1, 2)).toEqual(_.includes([1, 2, 3], 1, 2))
 
    expect(() => includes(1)).toThrow(TypeError),
    expect(() => includes('string')).toThrow(TypeError),
    expect(() => includes(false)).toThrow(TypeError),
    expect(() => includes({})).toThrow(TypeError),

    expect(() => includes(undefined)).toThrow(TypeError),
    expect(() => includes(null)).toThrow(TypeError),
    expect(() => includes(NaN)).toThrow(TypeError)
  })
})