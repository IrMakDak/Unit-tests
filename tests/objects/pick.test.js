const pick = require('../../src/objects/pick');

describe('pick', () => {
  test('Creates an object composed of the picked object properties.', () => {
    var object = { 'a': 1, 'b': '2', 'c': 3 };

    expect(pick(object, ['a', 'c'])).toEqual({ a: 1, c: 3 }),
    expect(pick(object, ['a'])).toEqual({ a: 1 }),
    expect(pick(object, ['b', 'a'])).toEqual({ a: 1, b: '2' }),
 
    expect(() => pick(1)).toThrow(TypeError),
    expect(() => pick('string')).toThrow(TypeError),
    expect(() => pick(false)).toThrow(TypeError),
    expect(() => pick([])).toThrow(TypeError),

    expect(() => pick(undefined)).toThrow(TypeError),
    expect(() => pick(null)).toThrow(TypeError),
    expect(() => pick(NaN)).toThrow(TypeError)
  })
})