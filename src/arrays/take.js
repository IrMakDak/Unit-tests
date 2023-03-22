/**
 * Creates a slice of array with n elements taken from the beginning.
 * 
 * @param {array} The array to query
 * @param {number} The number of elements to take
 * @return {array} Returns the slice of array
 *
 * @example:
 * take([1, 2, 3]) => [1]
 * take([1, 2, 3], 2) => [1, 2]
 * take([1, 2, 3], 5) => [1, 2, 3]
 * take([1, 2, 3], 0) => []
*/

function take(array, number = 1) {
    if (!Array.isArray(array)) {
        throw new TypeError(`${array} is not an array`);
    }
    let result = [];
    let resultCounter = 0;

    for (let currentIndex = 0; currentIndex < number; currentIndex += 1) {
        if (array[currentIndex]) {
            result[resultCounter] = array[currentIndex]
            resultCounter += 1;
        }
    }
    return result;
}

module.exports = take;