var _ = require("lodash");
/**
 * creates an object composed of the own and inherited enumerable string keyed properties of object that predicate doesn't return truthy for.
 * 
 * @param {object}  The source object.
 * @param {Function}  The function invoked per property.
 * 
 * @return {object} Returns the new object
 *
 * @example:
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 * var objectSec = { 'a': 'aaa', 'b': '2', 'c': 3 , 'd': '44'};
 * 
 * let funcNotNumber= (obj) => {
        let keys = Object.keys(obj);
        let result = {};
        for (let keyIndex = 0; keyIndex < keys.length; keyIndex += 1) {
            if (typeof(obj[keys[keyIndex]]) === 'number') {
                result[keys[keyIndex]] = obj[keys[keyIndex]]
            }
        }
        return(result)
    }
 *
 * pickBy(object, funcNotNumber) => { 'a': 1, 'c': 3 }
 * pickBy(objectSec, funcNotNumber) => { 'a': 1, 'c': 3 }
*/

function pickBy(object, func) {
  if (typeof object !== "object" || Array.isArray(object)) {
    throw new TypeError(`${object} is not an array`);
  }
  let result = {};
  let keys = Object.keys(object);
  for (let keyIndex = 0; keyIndex < keys.length; keyIndex += 1) {
    let currentKey = keys[keyIndex];
    let currentValue = object[currentKey];
    if (func(currentValue)) {
      result[currentKey] = currentValue;
    } else {
      continue;
    }
  }
  return result;
}

module.exports = pickBy;
