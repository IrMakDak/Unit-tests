/**
 * Checks if value is in collection. If collection is a string,
 * it's checked for a substring of value, otherwise SameValueZero
 * is used for equality comparisons. If fromIndex is negative,
 * it's used as the offset from the end of collection.
 * 
 * @param {array} The array to inspect
 * @param {*} The value to search for
 * @param {number} The index to search from
 * @return {boolean} Returns true if value is found, else false
 *
 * @example:
 * includes([1, 2, 3], 1)               => true
 * includes([1, 2, 3], 1, 2)            => false
*/

function includes(array, value, fromIndex = 0) {
    if (!Array.isArray(array)) {
        throw new TypeError(`${array} is not an array`);
    }

    let index = fromIndex;
    let result = false;

    for (index; index < array.length; index += 1) {
        if (array[index] === value) {
            result = true;
            break
        }
    }
    return result;
}

module.exports = includes;