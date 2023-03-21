const includes = require('../../src/arrays/includes');

describe('includes', () => {
  test("Checks if value is in collection. If collection is a string, it's checked for a substring of value, otherwise SameValueZero is used for equality comparisons", () => {

    expect(includes([1, 2, 3], 1)).toEqual(true),
    expect(includes([1, 2, 3], 1, 2)).toEqual(false)
 
    expect(() => includes(1)).toThrow(TypeError),
    expect(() => includes('string')).toThrow(TypeError),
    expect(() => includes(false)).toThrow(TypeError),
    expect(() => includes({})).toThrow(TypeError),

    expect(() => includes(undefined)).toThrow(TypeError),
    expect(() => includes(null)).toThrow(TypeError),
    expect(() => includes(NaN)).toThrow(TypeError)
  })
})