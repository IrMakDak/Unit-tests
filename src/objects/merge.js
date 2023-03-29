var _ = require("lodash");
/**
 * Recursively merges own and inherited enumerable string keyed       * properties of source objects into the destination object
 *
 * @param {...objects} The objects to process
 * @return {object} Returns the new object of grouped elements
 *
 * @example:
 * var object = {
 *  'a': [{ 'b': 2 }, { 'd': 4 }]
 * }
 * var other = {
 *  'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * merge(object, other) => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */

function merge(...objects) {
  for (let objIndex = 0; objIndex < objects.length; objIndex += 1) {
    if (
      typeof objects[objIndex] === "object" &&
      objects[objIndex].length !== 0
    ) {
      return objects[objIndex];
    } else {
      throw new TypeError(`${objects} is not an object`);
    }
  }
}

module.exports = merge;
