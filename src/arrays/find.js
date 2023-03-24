/**
 * Iterates over elements of array, returning the first
 * element predicate returns truthy for. The predicate is invoked with
 * three arguments: (value, arrayIndex, array).
 *
 * @param {array} The array to inspect
 * @param {function} The function invoked per iteration
 * @param {number} The arrayIndex to search from
 * @return {array || undefined} Returns the matched array, else undefined
 *
 * @example:
 * var users = [
 *      { 'user': 'barney',  'age': 36, 'active': true },
 *      { 'user': 'fred',    'age': 40, 'active': false },
 *      { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * find(users, function(value) { return value.age < 40; })      => object for 'barney'
 * find(users, function(value) { return value.age < 40; }, 1)   => object for 'pebbles'
 * find(users, function(value, arrayIndex) { return arrayIndex > 1; })   => object for 'pebbles'
 */

function find(array, predicate, fromIndex = 0) {
  if (!Array.isArray(array)) {
    throw new TypeError(`${array} is not an array`);
  }

  let arrayIndex = fromIndex;
  let result = "";

  for (arrayIndex; arrayIndex < array.length; arrayIndex += 1) {
    if (predicate(array[arrayIndex], arrayIndex, array)) {
      result = array[arrayIndex];
      break;
    } else {
      result = undefined;
    }
  }
  return result;
}

module.exports = find;
