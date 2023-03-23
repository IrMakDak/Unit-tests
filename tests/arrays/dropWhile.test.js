const dropWhile = require('../../src/arrays/dropWhile');
var _ = require('lodash');

describe('dropWhile', () => {
  test('Creates a slice of array excluding elements dropped from the beginning', () => {
    var users = [
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }
    ];
    expect(dropWhile(users, function(value) { return !value.active })).toEqual(_.dropWhile(users, function(value) { return !value.active })),
 
    expect(() => dropWhile(1)).toThrow(TypeError),
    expect(() => dropWhile('string')).toThrow(TypeError),
    expect(() => dropWhile(false)).toThrow(TypeError),
    expect(() => dropWhile({})).toThrow(TypeError),

    expect(() => dropWhile(undefined)).toThrow(TypeError),
    expect(() => dropWhile(null)).toThrow(TypeError),
    expect(() => dropWhile(NaN)).toThrow(TypeError)
  })
})