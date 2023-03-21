const compact = require('../../src/arrays/compact');

describe('compact', () => {
  test('creates an array with all falsey values removed', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]),
    expect(compact([1, 2, 3])).toEqual([1, 2, 3]),
    expect(compact([false, null, 0, "", undefined, NaN])).toEqual([]),
    expect(compact([])).toEqual([]),
 
    expect(() => compact(1)).toThrow(TypeError),
    expect(() => compact('string')).toThrow(TypeError),
    expect(() => compact(false)).toThrow(TypeError),
    expect(() => compact({})).toThrow(TypeError),

    expect(() => compact(undefined)).toThrow(TypeError),
    expect(() => compact(null)).toThrow(TypeError),
    expect(() => compact(NaN)).toThrow(TypeError)
  })
})
