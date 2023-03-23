/**
 * Recursively merges own and inherited enumerable string keyed       * properties of source objects into the destination object
 * 
 * @param {object}  The source object.
 * @param {array}  The property paths to omit.
 * 
 * @return {object} Returns the new object
 *
 * @example:
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * omit(object, ['a', 'c']) => { 'b': '2' }
*/

function omit(object, [...paths]) {

    if (!typeof(object) === 'object' && !Array.isArray(object)) {
        throw new TypeError(`${object} is not an array`);
    }
    if (typeof(paths) !== 'object' && !Array.isArray(paths)) {
        for (let pathIndex = 0; pathIndex < paths.length; pathIndex += 1) {
            if (typeof(paths[pathIndex] !== 'string')) {
                throw new TypeError(`${paths} is not a sttring | string[]`);       
            }
        }
    }

    let result = {};
    let keys = Object.keys(object);

    for (let keyIndex = 0; keyIndex < keys.length; keyIndex += 1) {
        let contains = false;
        for (let pathsIndex = 0; pathsIndex < paths.length; pathsIndex += 1) {
            if (paths[pathsIndex] === keys[keyIndex]) {
                contains = true
            }
        }
        if (!contains) {
            result[keys[keyIndex]] = object[keys[keyIndex]]
        }
    }

    return result
}

module.exports = omit;