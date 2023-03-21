const map = require('../../src/arrays/map');

describe('map', () => {
  test("Creates an array of values by running each element in array thru iteratee", () => {
    function square(value) {
        return value * value;
    }
    function squareRoot(value) {
        return Math.sqrt(value);
    }
    expect(map([4, 8], square)).toEqual([16, 64]),
    expect(map([1, 2, 3], square)).toEqual([1, 4, 9]),
    expect(map([4, 9], squareRoot)).toEqual([2, 3]),
    expect(map([16], squareRoot)).toEqual([4]),
 
    expect(() => map(1)).toThrow(TypeError),
    expect(() => map('string')).toThrow(TypeError),
    expect(() => map(false)).toThrow(TypeError),
    expect(() => map({})).toThrow(TypeError),

    expect(() => map(undefined)).toThrow(TypeError),
    expect(() => map(null)).toThrow(TypeError),
    expect(() => map(NaN)).toThrow(TypeError)
  })
})