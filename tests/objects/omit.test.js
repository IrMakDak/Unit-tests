const omit = require('../../src/objects/omit');

describe('omit', () => {
  test('Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.', () => {
    var object = { 'a': 1, 'b': '2', 'c': 3 };

    expect(omit(object, ['a', 'c'])).toEqual({ b: '2' }),
    expect(omit(object, 'c')).toEqual({ a: 1, b: '2' }),
    expect(omit(object, ['a'])).toEqual({ b: '2', c: 3 }),
    
 
    expect(() => omit(1)).toThrow(TypeError),
    expect(() => omit('string')).toThrow(TypeError),
    expect(() => omit(false)).toThrow(TypeError),
    expect(() => omit([])).toThrow(TypeError),

    expect(() => omit(undefined)).toThrow(TypeError),
    expect(() => omit(null)).toThrow(TypeError),
    expect(() => omit(NaN)).toThrow(TypeError)
  })
})