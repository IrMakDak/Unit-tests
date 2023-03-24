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
    expect(toPairs(new Fun)).toEqual(_.toPairs(new Fun))
  });
  test.each([
    [1], ['string'], [false], [undefined], [null], [NaN]
  ])('toPairs errors', (value) => {
    expect(() => toPairs(value)).toThrow(TypeError)
  })
})