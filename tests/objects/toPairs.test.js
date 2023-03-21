const toPairs = require('../../src/objects/toPairs');

describe('toPairs', () => {
  test("Creates an array of own enumerable string keyed-value pairs for object", () => {

    function Foo() {
        this.a = 1;
        this.b = 2;
      }
       
      Foo.prototype.c = 3;

    expect(toPairs(new Foo)).toEqual([['a', 1], ['b', 2]]),
    
 
    expect(() => toPairs(1)).toThrow(TypeError),
    expect(() => toPairs('string')).toThrow(TypeError),
    expect(() => toPairs(false)).toThrow(TypeError),
    expect(() => toPairs([])).toThrow(TypeError),

    expect(() => toPairs(undefined)).toThrow(TypeError),
    expect(() => toPairs(null)).toThrow(TypeError),
    expect(() => toPairs(NaN)).toThrow(TypeError)
  })
})