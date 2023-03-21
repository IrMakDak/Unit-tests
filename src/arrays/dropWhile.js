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
    let resultString = '';
    for (let index = 0; index < array.length; index += 1) {
        if (!predicate(array[index], index, array)) {
            result[resultCounter] = `'${array[index].user}'`;
            resultCounter += 1;
        };
    }

    if (result.length > 1) {
        let resultItem = 0;
        resultString = `objects for [`
        while (resultItem < result.length - 1) {
            resultString += result[resultItem] + ', ';
            resultItem += 1;
        }
        resultString += result[result.length - 1] + ']';
    } else {
        resultString = `object for [${result}]`
    }
    return resultString;
}

module.exports = dropWhile;