/**
 * Iterates over elements of array, returning an array of
 * all elements predicate returns truthy for. The predicate is invoked
 * with three arguments: (value, arrayIndex, array).
 *
 * @param {array} The array to iterate over
 * @param {function} The function invoked per iteration
 * @return {array} Returns the new filtered array
 *
 * @example:
 * var users = [
 *      { 'user': 'barney', 'age': 36, 'active': true },
 *      { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * filter(users, function(value) { return !value.active; })       => object for ['fred']
 * filter(users, function(value, arrayIndex) { return arrayIndex < 1; })    => object for ['barney']
 */

function filter(array, predicate) {
  if (!Array.isArray(array)) {
    throw new TypeError(`${array} is not an array`);
  }

  let result = [];
  let resultCounter = 0;
  let resultObj = {};

  for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex += 1) {
    if (predicate(array[arrayIndex], arrayIndex, array)) {
      result[resultCounter] = array[arrayIndex];
      resultCounter += 1;
    }
  }
  return result;
}

module.exports = filter;
