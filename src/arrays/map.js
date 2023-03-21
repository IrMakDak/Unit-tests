/**
 * Creates an array of values by running each element in array
 * thru iteratee. The iteratee is invoked with three arguments:
 * (value, index, array).
 * 
 * @param {array} The array to iterate over
 * @param {function} The function invoked per iteration
 * @return {array} Returns the new mapped array
 *
 * @example:
 * function square(value, index, array) {
 *      return value * value;
 * }
 * 
 * map([4, 8], square) => [16, 64]
*/

function map(array, iteratee) {
    if (!Array.isArray(array)) {
        throw new TypeError(`${array} is not an array`);
    }

    let result = [];
    for (let index = 0; index < array.length; index += 1) {
        result[index] = iteratee(array[index])
    }
    return result;
}

module.exports = map;