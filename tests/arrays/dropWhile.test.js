const dropWhile = require('../../src/arrays/dropWhile');

describe('dropWhile', () => {
  test('creates a slice of array excluding elements dropped from the beginning', () => {
    var users = [
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }
    ];
    expect(dropWhile(users, function(value) { return !value.active; })).toEqual("object for ['pebbles']"),
    expect(dropWhile(users, function(value, index) { return index > 1; })).toEqual("objects for ['barney', 'fred']")
 
    expect(() => dropWhile(1)).toThrow(TypeError),
    expect(() => dropWhile('string')).toThrow(TypeError),
    expect(() => dropWhile(false)).toThrow(TypeError),
    expect(() => dropWhile({})).toThrow(TypeError),

    expect(() => dropWhile(undefined)).toThrow(TypeError),
    expect(() => dropWhile(null)).toThrow(TypeError),
    expect(() => dropWhile(NaN)).toThrow(TypeError)
  })
})