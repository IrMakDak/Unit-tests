/**
 * Creates a slice of array with n elements dropped from the beginning.
 * 
 * @param {array} The array to query
 * @param {number} The number of elements to drop
 * @return {array} Returns the slice of array
 *
 * @example:
 * drop([1, 2, 3]) => [2, 3]
 * drop([1, 2, 3], 2) => [3]
 * drop([1, 2, 3], 5) => []
 * drop([1, 2, 3], 0) => [1, 2, 3]
 * drop(['a', 'b', 'c', 'd'], 3) => ['d']
 * drop([null, 0, false, undefined, 'string', 1]) => [0, false, undefined, 'string', 1]
 * 
 * drop(1)) => TypeError
 * drop('string')) => TypeError
 * drop(false)) => TypeError
 * drop({})) => TypeError
 * 
 * drop(undefined) => TypeError
 * drop(null) => TypeError
 * drop(NaN) => TypeError
*/

function drop(array, number = 1) {
    if (!Array.isArray(array)) {
        throw new TypeError(`${array} is not an array`);
    }
    let result = []
    let resultIndex = 0
    
    for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex += 1) {
        if (arrayIndex >= number) {
            result[resultIndex] = array[arrayIndex]
            resultIndex += 1
        }
    }
    return result
}

module.exports = drop;