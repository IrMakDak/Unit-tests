const merge = require('../../src/objects/merge');

describe('merge', () => {
  test('Recursively merges own and inherited enumerable string keyed properties of source objects into the destination object', () => {
    var object = {
      'a': [{ 'b': 2 }, { 'd': 4 }]
    };
    var other = {
        'a': [{ 'c': 3 }, { 'e': 5 }]
    };
    var andOther = {
        'b': [{ 'c': 1 }, { 'g': 5 }]
    }
    expect(merge(object, other)).toEqual({ a: [ { b: 2, d: 4 }, { c: 3, e: 5 } ] }),
    expect(merge(object, andOther)).toEqual({ a: { b: 2, d: 4 }, b: { c: 1, g: 5 } }),
    expect(merge(object, other, andOther)).toEqual({ a: [ { b: 2, d: 4 }, { c: 3, e: 5 } ], b: { c: 1, g: 5 } }),
    
 
    expect(() => merge(1)).toThrow(TypeError),
    expect(() => merge('string')).toThrow(TypeError),
    expect(() => merge(false)).toThrow(TypeError),
    expect(() => merge([])).toThrow(TypeError),

    expect(() => merge(undefined)).toThrow(TypeError),
    expect(() => merge(null)).toThrow(TypeError),
    expect(() => merge(NaN)).toThrow(TypeError)
  })
})
