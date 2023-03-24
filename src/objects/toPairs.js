/**
 * Creates an array of own enumerable string keyed-value pairs for object 
 * 
 * @param {object}  The object to query.
 * 
 * @return {object} Returns the key-value pairs.
 *
 * @example:
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 * var objectSec = { 'a': 'aaa', 'b': '2', 'c': 3 , 'd': '44'};
 * 
 * function Foo() {
  this.a = 1;
  this.b = 2;
}
 * Foo.prototype.c = 3;
 *
 * toPairs(new Foo) => [['a', 1], ['b', 2]]
*/

function toPairs(obj) {
  if (typeof obj !== "object" || Array.isArray(obj)) {
    throw new TypeError(`${obj} is not an object`);
  }
  let result = [];
  let keys = Object.keys(obj);
  for (let resultIndex = 0; resultIndex < keys.length; resultIndex += 1) {
    let internalArray = [];
    internalArray[0] = keys[resultIndex];
    internalArray[1] = obj[keys[resultIndex]];
    result[resultIndex] = internalArray;
  }
  return result;
}

module.exports = toPairs;
