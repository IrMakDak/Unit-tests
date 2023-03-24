const find = require('../../src/arrays/find');
var _ = require('lodash');

describe('find', () => {
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];
  test.each([
    [users, function(value) { return value.age < 40; }],
    [users, function(value) { return value.age < 40; }, 1],
    [users, function(value, index) { return index > 1; }]
  ])('Iterates over elements of array, returning the first element predicate returns truthy for', (users, func, fromIndex = 0) => {
    expect(find(users, func, fromIndex)).toEqual(_.find(users, func, fromIndex))
  });
  test.each([
    [1], ['string'], [false], [{}], [undefined], [null], [NaN]
  ])('find errors', (value) => {
    expect(() => find(value)).toThrow(TypeError)
  })
})