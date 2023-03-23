const zip = require('../../src/arrays/zip');
var _ = require('lodash');

describe('zip', () => {
  test('Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on', () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual(_.zip(['a', 'b'], [1, 2], [true, false])),
    expect(zip([])).toEqual(_.zip([])),
    expect(zip([1, 2], [3, 4])).toEqual(_.zip([1, 2], [3, 4])),
    expect(zip([1, 2], [2, 3], [3, 4])).toEqual(_.zip([1, 2], [2, 3], [3, 4])),
 
    expect(() => zip(1)).toThrow(TypeError),
    expect(() => zip('string')).toThrow(TypeError),
    expect(() => zip(false)).toThrow(TypeError),
    expect(() => zip({})).toThrow(TypeError),

    expect(() => zip(undefined)).toThrow(TypeError),
    expect(() => zip(null)).toThrow(TypeError),
    expect(() => zip(NaN)).toThrow(TypeError)
  })
})
