const omit = require("../../src/objects/omit");
var _ = require("lodash");

describe("omit", () => {
  const object = { a: 1, b: "2", c: 3 };
  test.each([
    [object, ["a", "c"]],
    [object, "c"],
    [object, ["a"]],
  ])(
    "Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.",
    (object, paths) => {
      expect(omit(object, paths)).toEqual(_.omit(object, paths));
    }
  );
  test.each([[1], ["string"], [false], [{}], [undefined], [null], [NaN]])(
    "omit errors",
    (value) => {
      expect(() => omit(value)).toThrow(TypeError);
    }
  );
});
