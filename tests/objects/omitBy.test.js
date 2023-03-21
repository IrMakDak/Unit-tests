const omitBy = require('../../src/objects/omitBy');

describe('omitBy', () => {
  test("Creates an object composed of the own and inherited enumerable string keyed properties of object that predicate doesn't return truthy for.", () => {
    var object = { 'a': 1, 'b': '2', 'c': 3 };
    var objectSec = { 'a': 'aaa', 'b': '2', 'c': 3 , 'd': '44'};

    let funcNotNumber= (obj) => {
        let keys = Object.keys(obj);
        let result = {};
        for (let keyIndex = 0; keyIndex < keys.length; keyIndex += 1) {
            if (typeof(obj[keys[keyIndex]]) === 'number') {
                result[keys[keyIndex]] = obj[keys[keyIndex]]
            }
        }
        return(result)
    }

    expect(omitBy(object, funcNotNumber)).toEqual({ b: '2' }),
    expect(omitBy(objectSec, funcNotNumber)).toEqual({ a: 'aaa', b: '2', d: '44' }),
    
 
    expect(() => omitBy(1)).toThrow(TypeError),
    expect(() => omitBy('string')).toThrow(TypeError),
    expect(() => omitBy(false)).toThrow(TypeError),
    expect(() => omitBy([])).toThrow(TypeError),

    expect(() => omitBy(undefined)).toThrow(TypeError),
    expect(() => omitBy(null)).toThrow(TypeError),
    expect(() => omitBy(NaN)).toThrow(TypeError)
  })
})