const merge = require("../../src/objects/merge");
var _ = require("lodash");

describe("merge", () => {
  const object = {
    a: [{ b: 2 }, { d: 4 }],
  };
  const other = {
    a: [{ c: 3 }, { e: 5 }],
  };
  const andOther = {
    b: [{ c: 1 }, { g: 5 }],
  };
  test.each([
    [object, other],
    [object, andOther],
    [object, other, andOther],
    [{}],
  ])(
    "Recursively merges own and inherited enumerable string keyed properties of source objects into the destination object",
    (...objects) => {
      expect(merge(objects)).toEqual(_.merge(objects));
    }
  );
  test.each([[1], ["string"], [false], [undefined], [null], [NaN]])(
    "merge errors",
    (value) => {
      expect(() => merge(value)).toThrow(TypeError);
    }
  );
});
