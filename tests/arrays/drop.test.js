const drop = require('../../src/arrays/drop');
var _ = require('lodash');

describe('drop', () => {
  test('creates a slice of array with n elements dropped from the beginning', () => {
    expect(drop([1, 2, 3])).toEqual(_.drop([1, 2, 3])),
    expect(drop([1, 2, 3], 2)).toEqual(_.drop([1, 2, 3], 2)),
    expect(drop([1, 2, 3], 5)).toEqual(_.drop([1, 2, 3], 5)),
    expect(drop([1, 2, 3], 0)).toEqual(_.drop([1, 2, 3], 0)),
    expect(drop(['a', 'b', 'c', 'd'], 3)).toEqual(_.drop(['a', 'b', 'c', 'd'], 3)),
    expect(drop([null, 0, false, undefined, 'string', 1])).toEqual(_.drop([null, 0, false, undefined, 'string', 1])),
 
    expect(() => drop(1)).toThrow(TypeError),
    expect(() => drop('string')).toThrow(TypeError),
    expect(() => drop(false)).toThrow(TypeError),
    expect(() => drop({})).toThrow(TypeError),

    expect(() => drop(undefined)).toThrow(TypeError),
    expect(() => drop(null)).toThrow(TypeError),
    expect(() => drop(NaN)).toThrow(TypeError)
  })
})