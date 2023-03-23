const pick = require('../../src/objects/pick');
var _ = require('lodash');

describe('pick', () => {
  test('Creates an object composed of the picked object properties.', () => {
    var object = { 'a': 1, 'b': '2', 'c': 3 };

    expect(pick(object, ['a', 'c'])).toEqual(_.pick(object, ['a', 'c'])),
    expect(pick(object, ['a'])).toEqual(_.pick(object, ['a'])),
    expect(pick(object, ['b', 'a'])).toEqual(_.pick(object, ['b', 'a'])),
 
    expect(() => pick(1)).toThrow(TypeError),
    expect(() => pick('string')).toThrow(TypeError),
    expect(() => pick(false)).toThrow(TypeError),
    expect(() => pick([])).toThrow(TypeError),

    expect(() => pick(undefined)).toThrow(TypeError),
    expect(() => pick(null)).toThrow(TypeError),
    expect(() => pick(NaN)).toThrow(TypeError)
  })
})