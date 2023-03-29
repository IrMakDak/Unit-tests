/**
 * Creates an array of grouped elements, the first of which contains
 * the first elements of the given arrays, the second of which
 * contains the second elements of the given arrays, and so on.
 *
 * @param {...arrays} The arrays to process
 * @return {array} Returns the new array of grouped elements
 *
 * @example:
 * zip(['a', 'b'], [1, 2], [true, false]) => [['a', 1, true], ['b', 2, false]]
 */

function zip(...arrays) {
  if (!Array.isArray(...arrays)) {
    throw new TypeError(`${arrays} is not an array`);
  }

  let maxLen = 0;
  for (let subArr = 0; subArr < arrays.length; subArr += 1) {
    if (arrays[subArr].length > maxLen) {
      maxLen = arrays[subArr].length;
    }
  }

  const result = [];

  for (let i = 0; i < maxLen; i += 1) {
    result[i] = [];
  }

  let counter = 0;

  for (let subArr = 0; subArr < arrays.length; subArr += 1) {
    while (counter < maxLen) {
      result[counter][subArr] = arrays[subArr][counter];
      counter += 1;
    }
    counter = 0;
  }

  return result;
}

module.exports = zip;
