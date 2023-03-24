const pick = require('../../src/objects/pick');
var _ = require('lodash');

describe('pick', () => {
  var object = { 'a': 1, 'b': '2', 'c': 3 };
  test.each([
    [object, ['a', 'c']],
    [object, ['a']],
    [object, ['b', 'a']],
    [{}, ['c']]
  ])('Creates an object composed of the picked object properties.', (object, paths) => {
    expect(pick(object, paths)).toEqual(_.pick(object, paths))
  });
  test.each([
    [1], ['string'], [false], [undefined], [null], [NaN]
  ])('pick errors', (value) => {
    expect(() => pick(value)).toThrow(TypeError)
  })
})