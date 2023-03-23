const take = require('../../src/arrays/take');
var _ = require('lodash');

describe('take', () => {
  test('creates a slice of array with n elements taken from the beginning', () => {
    expect(take([1, 2, 3])).toEqual(_.take([1, 2, 3])),
    expect(take([1, 2, 3], 2)).toEqual(_.take([1, 2, 3], 2)),
    expect(take([1, 2, 3], 5)).toEqual(_.take([1, 2, 3], 5)),
    expect(take([1, 2, 3], 0)).toEqual(_.take([1, 2, 3], 0)),
 
    expect(() => take(1)).toThrow(TypeError),
    expect(() => take('string')).toThrow(TypeError),
    expect(() => take(false)).toThrow(TypeError),
    expect(() => take({})).toThrow(TypeError),

    expect(() => take(undefined)).toThrow(TypeError),
    expect(() => take(null)).toThrow(TypeError),
    expect(() => take(NaN)).toThrow(TypeError)
  })
})