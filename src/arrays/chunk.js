/**
 *Creates an array of elements split into groups the length of size.
 *If array can't be split evenly, the final chunk will be the remaining elements.
 *
 *@param {array} The array to process
 *@param {number} The length of each chunk
 *@return {array} Returns the new array of chunks
 *
 *@example:
 *chunk(['a', 'b', 'c', 'd'], 2) => [['a', 'b'], ['c', 'd']]
 *chunk(['a', 'b', 'c', 'd'], 3) => [['a', 'b', 'c'], ['d']]
 *chunk ([1, 2, 3]) => [[1], [2], [3]]
 *chunk([]) => [[]]

 *chunk (1) => TypeError: 1 is not an array
 *chunk ('string') => TypeError: 'string' is not an array
 *chunk (false) => TypeError: false is not an array
 *chunk({}) => TypeError: {} is not an array

 *chunk(null) => TypeError: null is not an array
 *chunk(NaN) => TypeError: NaN is not an array
 *chunk(undefined) => TypeError: undefined is not an array
*/

function chunk (array, number = 1) {
  if (!Array.isArray(array)) {
    throw new TypeError(`${array} is not an array`)
  }

  const result = []
  let resultCounter = 0
  let subArr = []
  let subArrCounter = 0
  let innerNumber = number

  for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex += 1) {
    if (arrayIndex !== innerNumber) {
      subArr[subArrCounter] = array[arrayIndex]
      subArrCounter += 1
    } else {
      result[resultCounter] = subArr
      resultCounter += 1
      subArr = []
      subArrCounter = 0
      subArr[subArrCounter] = array[arrayIndex]
      subArrCounter += 1
      innerNumber += number
    }
  }

  if (subArr.length !== 0) {
    result[resultCounter] = subArr
    resultCounter += 1
  }
  return (result)
}
module.exports = chunk;
