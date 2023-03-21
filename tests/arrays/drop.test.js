const drop = require('../../src/arrays/drop');

describe('drop', () => {
  test('creates a slice of array with n elements dropped from the beginning', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]),
    expect(drop([1, 2, 3], 2)).toEqual([3]),
    expect(drop([1, 2, 3], 5)).toEqual([]),
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]),
    expect(drop(['a', 'b', 'c', 'd'], 3)).toEqual(['d']),
    expect(drop([null, 0, false, undefined, 'string', 1])).toEqual([0, false, undefined, 'string', 1]),
 
    expect(() => drop(1)).toThrow(TypeError),
    expect(() => drop('string')).toThrow(TypeError),
    expect(() => drop(false)).toThrow(TypeError),
    expect(() => drop({})).toThrow(TypeError),

    expect(() => drop(undefined)).toThrow(TypeError),
    expect(() => drop(null)).toThrow(TypeError),
    expect(() => drop(NaN)).toThrow(TypeError)
  })
})