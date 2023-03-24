/**
 * Creates a slice of array excluding elements dropped from the beginning.
 * Elements are dropped until predicate returns falsey.
 * The predicate is invoked with three arguments: (value, index, array).
 *
 * @param {array} The array to query
 * @param {function} The function invoked per iteration
 * @return {array} Returns the slice of array
 *
 * @example:
 * var users = [
 *      { 'user': 'barney',  'active': false },
 *      { 'user': 'fred',    'active': false },
 *      { 'user': 'pebbles', 'active': true }
 * ];
 *
 * dropWhile(users, function(value) { return !value.active; }) => object for ['pebbles']
 * dropWhile(users, function(value, index) { return index > 1; }) => objects for ['barney', 'fred']
 */

function dropWhile(array, predicate) {
  if (!Array.isArray(array)) {
    throw new TypeError(`${array} is not an array`);
  }

  let result = [];
  let resultCounter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (!predicate(array[index])) {
      result[resultCounter] = array[index];
      resultCounter += 1;
    }
  }
  return result;
}

module.exports = dropWhile;
