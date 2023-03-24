/**
 *
 * Creates an object composed of the picked object properties.
 *
 * @param {object}  The source object.
 * @param {array}  The property paths to pick.
 *
 * @return {object} Returns the new object
 *
 * @example:
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 *
 * pick(object, ['a', 'c']); => { 'a': 1, 'c': 3 }
 */

function pick(object, [...paths]) {
  if (!typeof object === "object" && !Array.isArray(object)) {
    throw new TypeError(`${object} is not an array`);
  }
  if (typeof paths !== "object" && !Array.isArray(paths)) {
    for (let pathIndex = 0; pathIndex < paths.length; pathIndex += 1) {
      if (typeof (paths[pathIndex] !== "string")) {
        throw new TypeError(`${paths} is not a sttring | string[]`);
      }
    }
  }

  let result = {};
  let keys = Object.keys(object);

  for (let keyIndex = 0; keyIndex < keys.length; keyIndex += 1) {
    for (let pathsIndex = 0; pathsIndex < paths.length; pathsIndex += 1) {
      if (paths[pathsIndex] === keys[keyIndex]) {
        result[keys[keyIndex]] = object[keys[keyIndex]];
      }
    }
  }

  return result;
}

module.exports = pick;
