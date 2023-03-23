const map = require('../../src/arrays/map');
var _ = require('lodash');

describe('map', () => {
  test("Creates an array of values by running each element in array thru iteratee", () => {
    function square(value) {
        return value * value;
    }
    function squareRoot(value) {
        return Math.sqrt(value);
    }
    expect(map([4, 8], square)).toEqual(_.map([4, 8], square)),
    expect(map([1, 2, 3], square)).toEqual(_.map([1, 2, 3], square)),
    expect(map([4, 9], squareRoot)).toEqual(_.map([4, 9], squareRoot)),
    expect(map([16], squareRoot)).toEqual(_.map([16], squareRoot)),
 
    expect(() => map(1)).toThrow(TypeError),
    expect(() => map('string')).toThrow(TypeError),
    expect(() => map(false)).toThrow(TypeError),
    expect(() => map({})).toThrow(TypeError),

    expect(() => map(undefined)).toThrow(TypeError),
    expect(() => map(null)).toThrow(TypeError),
    expect(() => map(NaN)).toThrow(TypeError)
  })
})