const toPairs = require("../../src/objects/toPairs");
var _ = require("lodash");

describe("toPairs", () => {
  test("Creates an array of own enumerable string keyed-value pairs for object", () => {
    function CreateObj() {
      this.a = 1;
      this.b = 2;
    }
    function CreateSecObj() {
      (this.f = "4"), (this.h = 0);
    }

    CreateObj.prototype.c = 3;

    expect(toPairs(new CreateObj())).toEqual(_.toPairs(new CreateObj())),
      expect(toPairs(new CreateSecObj())).toEqual(
        _.toPairs(new CreateSecObj())
      );
  });
  test.each([[1], ["string"], [false], [undefined], [null], [NaN]])(
    "toPairs errors",
    (value) => {
      expect(() => toPairs(value)).toThrow(TypeError);
    }
  );
});
