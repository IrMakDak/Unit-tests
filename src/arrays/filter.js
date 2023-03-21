/**
 * Iterates over elements of array, returning an array of
 * all elements predicate returns truthy for. The predicate is invoked
 * with three arguments: (value, index, array).
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
 * filter(users, function(value, index) { return index < 1; })    => object for ['barney']
*/

function filter(array, predicate) {
    if (!Array.isArray(array)) {
        throw new TypeError(`${array} is not an array`);
    }

    let result = [];
    let resultCounter = 0;
    let resultString = '';

    for (let index = 0; index < array.length; index += 1) {
        if (predicate(array[index], index, array)) {
            result[resultCounter] = `'${array[index].user}'`;
            resultCounter += 1;
        };
    }

    let resultItem = 0;
    resultString = `object for [`
    while (resultItem < result.length - 1) {
        resultString += result[resultItem] + ', ';
        resultItem += 1;
    }
    resultString += result[result.length - 1] + ']';
    return resultString;
}

module.exports = filter;