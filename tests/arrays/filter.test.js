const filter = require('../../src/arrays/filter');

describe('filter', () => {
  test('Iterates over elements of array, returning an array of all elements predicate returns truthy for', () => {
    var users = [
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred',   'age': 40, 'active': false }
    ];
    expect(filter(users, function(value) { return !value.active; })).toEqual("object for ['fred']"),
    expect(filter(users, function(value, index) { return index < 1; })).toEqual("object for ['barney']")
 
    expect(() => filter(1)).toThrow(TypeError),
    expect(() => filter('string')).toThrow(TypeError),
    expect(() => filter(false)).toThrow(TypeError),
    expect(() => filter({})).toThrow(TypeError),

    expect(() => filter(undefined)).toThrow(TypeError),
    expect(() => filter(null)).toThrow(TypeError),
    expect(() => filter(NaN)).toThrow(TypeError)
  })
})