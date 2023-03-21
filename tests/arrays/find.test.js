const find = require('../../src/arrays/find');

describe('find', () => {
  test('Iterates over elements of array, returning the first element predicate returns truthy for', () => {
    var users = [
        { 'user': 'barney',  'age': 36, 'active': true },
        { 'user': 'fred',    'age': 40, 'active': false },
        { 'user': 'pebbles', 'age': 1,  'active': true }
    ];
    expect(find(users, function(value) { return value.age < 40; })).toEqual("object for 'barney'"),
    expect(find(users, function(value) { return value.age < 40; }, 1)).toEqual("object for 'pebbles'")
    expect(find(users, function(value, index) { return index > 1; })).toEqual("object for 'pebbles'")
 
    expect(() => find(1)).toThrow(TypeError),
    expect(() => find('string')).toThrow(TypeError),
    expect(() => find(false)).toThrow(TypeError),
    expect(() => find({})).toThrow(TypeError),

    expect(() => find(undefined)).toThrow(TypeError),
    expect(() => find(null)).toThrow(TypeError),
    expect(() => find(NaN)).toThrow(TypeError)
  })
})