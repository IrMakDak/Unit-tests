const pickBy = require('../../src/objects/pickBy');
var _ = require('lodash');

describe('pickBy', () => {
  var object = { 'a': 1, 'b': '2', 'c': 3 };
  var objectSec = { 'a': 'aaa', 'b': '2', 'c': 3 , 'd': '44'};
  var objectThird = { 'z': 0, 'd': 3 , 'r': null};
  

  let isNumber= (value) => {
    if (typeof(value) === 'number') {
        return true
    } else {
      return false
    }
  }
  test.each([
    [object, isNumber],
    [objectSec, isNumber],
    [objectThird, isNumber],
    [{}, isNumber],
  ])("Creates an object composed of the object properties predicate returns truthy for.", (object, func) => {
    expect(pickBy(object, func)).toEqual(_.pickBy(object, func))
  });
  test.each([
    [1], ['string'], [false], [undefined], [null], [NaN]
  ])('pickBy errors', (value) => {
    expect(() => pickBy(value)).toThrow(TypeError)
  })
})