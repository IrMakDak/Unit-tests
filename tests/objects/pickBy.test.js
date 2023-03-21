const pickBy = require('../../src/objects/pickBy');

describe('pickBy', () => {
  test("Creates an object composed of the object properties predicate returns truthy for.", () => {
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

    expect(pickBy(object, funcNotNumber)).toEqual({ 'a': 1, 'c': 3 }),
    expect(pickBy(objectSec, funcNotNumber)).toEqual({'c': 3 }),
    
 
    expect(() => pickBy(1)).toThrow(TypeError),
    expect(() => pickBy('string')).toThrow(TypeError),
    expect(() => pickBy(false)).toThrow(TypeError),
    expect(() => pickBy([])).toThrow(TypeError),

    expect(() => pickBy(undefined)).toThrow(TypeError),
    expect(() => pickBy(null)).toThrow(TypeError),
    expect(() => pickBy(NaN)).toThrow(TypeError)
  })
})