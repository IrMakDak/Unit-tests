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
    let exclude = func(object);
    excludeKeys = Object.keys(exclude)
    let result = {};
    let keys = Object.keys(object)
    for (let keyIndex = 0; keyIndex < keys.length; keyIndex += 1) {
        for (let excludeIndex = 0; excludeIndex < excludeKeys.length; excludeIndex += 1) {
            if (excludeKeys[excludeIndex] === keys[keyIndex]) {
                result[keys[keyIndex]] = object[keys[keyIndex]]
            }
        }
    }
    return(result)
}

module.exports = pickBy;