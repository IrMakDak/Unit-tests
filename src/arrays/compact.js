/**
 * Creates an array with all falsey values removed.
 * The values false, null, 0, "", undefined, and NaN are falsey.
 *
 * @param {array} The array to compact
 * @return {array} Returns the new array of filtered values
 *
 * @example:
 * compact([0, 1, false, 2, '', 3]) => [1, 2, 3]
 * compact([1, 2, 3]) => [1, 2, 3]
 * compact([false, null, 0, "", undefined, NaN])
 * compact([]) => []
 * 
 * compact(1)) => TypeError
 * compact('string')) => TypeError
 * compact(false)) => TypeError
 * compact({})) => TypeError
 * 
 * compact(undefined) => TypeError
 * compact(null) => TypeError
 * compact(NaN) => TypeError
*/

function compact (innerArray) {
  if (!Array.isArray(innerArray)) {
    throw new TypeError(`${innerArray} is not an array`)
  }

  const result = []
  let resultCounter = 0
  for (let counter = 0; counter < innerArray.length; counter += 1) {
    if (Boolean(innerArray[counter]) === true) {
      result[resultCounter] = innerArray[counter]
      resultCounter += 1
    }
  }
  return result
}
module.exports = compact;
