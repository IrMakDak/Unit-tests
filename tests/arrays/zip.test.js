const zip = require('../../src/arrays/zip');

describe('zip', () => {
  test('Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on', () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([ ['a', 1, true], ['b', 2, false] ]),
    expect(zip([])).toEqual([]),
    expect(zip([1, 2], [3, 4])).toEqual([[1, 3], [2, 4]]),
    expect(zip([1, 2], [2, 3], [3, 4])).toEqual([[1, 2, 3], [2, 3, 4]]),
 
    expect(() => zip(1)).toThrow(TypeError),
    expect(() => zip('string')).toThrow(TypeError),
    expect(() => zip(false)).toThrow(TypeError),
    expect(() => zip({})).toThrow(TypeError),

    expect(() => zip(undefined)).toThrow(TypeError),
    expect(() => zip(null)).toThrow(TypeError),
    expect(() => zip(NaN)).toThrow(TypeError)
  })
})
