const omitBy = require('../../src/objects/omitBy');
var _ = require('lodash');

describe('omitBy', () => {
  var object = { 'a': 1, 'b': '2', 'c': 3 };
  var objectSec = { 'a': 'aaa', 'b': '2', 'c': 3 , 'd': '44'};

  let funcNotNumber= (value) => {
    if (typeof(value) === 'number') {
        return true
    } else {
      return false
    }
  }
  test.each([
    [object, funcNotNumber],
    [objectSec, funcNotNumber],
    [{}, funcNotNumber],
  ])("Creates an object composed of the own and inherited enumerable string keyed properties of object that predicate doesn't return truthy for.", (object, func) => {
    expect(omitBy(object, func)).toEqual(_.omitBy(object, func))
  });
  test.each([
    [1], ['string'], [false], [undefined], [null], [NaN]
  ])('omitBy errors', (value) => {
    expect(() => omitBy(value)).toThrow(TypeError)
  })
})