const pickBy = require('../../src/objects/pickBy');
var _ = require('lodash');

describe('pickBy', () => {
  test("Creates an object composed of the object properties predicate returns truthy for.", () => {
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

    expect(pickBy(object, isNumber)).toEqual(_.pickBy(object, isNumber)),
    expect(pickBy(objectSec, isNumber)).toEqual(_.pickBy(objectSec, isNumber)),
    expect(pickBy(objectThird, isNumber)).toEqual(_.pickBy(objectThird, isNumber)),
    
 
    expect(() => pickBy(1)).toThrow(TypeError),
    expect(() => pickBy('string')).toThrow(TypeError),
    expect(() => pickBy(false)).toThrow(TypeError),
    expect(() => pickBy([])).toThrow(TypeError),

    expect(() => pickBy(undefined)).toThrow(TypeError),
    expect(() => pickBy(null)).toThrow(TypeError),
    expect(() => pickBy(NaN)).toThrow(TypeError)
  })
})