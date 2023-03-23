const compact = require('../../src/arrays/compact');
var _ = require('lodash');

describe('compact', () => {
  test('creates an array with all falsey values removed', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual(_.compact([0, 1, false, 2, '', 3])),
    expect(compact([1, 2, 3])).toEqual(_.compact([1, 2, 3])),
    expect(compact([false, null, 0, "", undefined, NaN])).toEqual(_.compact([false, null, 0, "", undefined, NaN])),
    expect(compact([])).toEqual(_.compact([])),
 
    expect(() => compact(1)).toThrow(TypeError),
    expect(() => compact('string')).toThrow(TypeError),
    expect(() => compact(false)).toThrow(TypeError),
    expect(() => compact({})).toThrow(TypeError),

    expect(() => compact(undefined)).toThrow(TypeError),
    expect(() => compact(null)).toThrow(TypeError),
    expect(() => compact(NaN)).toThrow(TypeError)
  })
})
