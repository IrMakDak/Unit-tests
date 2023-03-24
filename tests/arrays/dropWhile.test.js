const dropWhile = require('../../src/arrays/dropWhile');
var _ = require('lodash');

describe('dropWhile', () => {
  test('Creates a slice of array excluding elements dropped from the beginning', () => {
    var users = [
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }
    ];
    expect(dropWhile(users, function(value) { return !value.active })).toEqual(_.dropWhile(users, function(value) { return !value.active }))
  });
  test.each([
    [1], ['string'], [false], [{}], [undefined], [null], [NaN]
  ])('dropWhile errors', (value) => {
    expect(() => dropWhile(value)).toThrow(TypeError)
  })
})