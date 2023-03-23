const toPairs = require('../../src/objects/toPairs');
var _ = require('lodash');

describe('toPairs', () => {
  test("Creates an array of own enumerable string keyed-value pairs for object", () => {

    function Foo() {
        this.a = 1;
        this.b = 2;
    }
    function Fun() {
      this.f = '4',
      this.h = 0
    }
       
      Foo.prototype.c = 3;

    expect(toPairs(new Foo)).toEqual(_.toPairs(new Foo)),
    expect(toPairs(new Fun)).toEqual(_.toPairs(new Fun)),
    
 
    expect(() => toPairs(1)).toThrow(TypeError),
    expect(() => toPairs('string')).toThrow(TypeError),
    expect(() => toPairs(false)).toThrow(TypeError),
    expect(() => toPairs([])).toThrow(TypeError),

    expect(() => toPairs(undefined)).toThrow(TypeError),
    expect(() => toPairs(null)).toThrow(TypeError),
    expect(() => toPairs(NaN)).toThrow(TypeError)
  })
})