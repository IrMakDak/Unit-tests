const omitBy = require('../../src/objects/omitBy');
var _ = require('lodash');

describe('omitBy', () => {
  test("Creates an object composed of the own and inherited enumerable string keyed properties of object that predicate doesn't return truthy for.", () => {
    var object = { 'a': 1, 'b': '2', 'c': 3 };
    var objectSec = { 'a': 'aaa', 'b': '2', 'c': 3 , 'd': '44'};

    let funcNotNumber= (value) => {
      if (typeof(value) === 'number') {
          return true
      } else {
        return false
      }
    }

    expect(omitBy(object, funcNotNumber)).toEqual(_.omitBy(object, funcNotNumber)),
    expect(omitBy(objectSec, funcNotNumber)).toEqual(_.omitBy(objectSec, funcNotNumber)),
    
 
    expect(() => omitBy(1)).toThrow(TypeError),
    expect(() => omitBy('string')).toThrow(TypeError),
    expect(() => omitBy(false)).toThrow(TypeError),
    expect(() => omitBy([])).toThrow(TypeError),

    expect(() => omitBy(undefined)).toThrow(TypeError),
    expect(() => omitBy(null)).toThrow(TypeError),
    expect(() => omitBy(NaN)).toThrow(TypeError)
  })
})