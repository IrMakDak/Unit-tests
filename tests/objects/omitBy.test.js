const omitBy = require("../../src/objects/omitBy");
var _ = require("lodash");

describe("omitBy", () => {
  const object = { a: 1, b: "2", c: 3 };
  const objectSec = { a: "aaa", b: "2", c: 3, d: "44" };

  let isNumber = (value) => {
    if (typeof value === "number") {
      return true;
    } else {
      return false;
    }
  };
  test.each([
    [object, isNumber],
    [objectSec, isNumber],
    [{}, isNumber],
  ])(
    "Creates an object composed of the own and inherited enumerable string keyed properties of object that predicate doesn't return truthy for.",
    (object, func) => {
      expect(omitBy(object, func)).toEqual(_.omitBy(object, func));
    }
  );
  test.each([[1], ["string"], [false], [undefined], [null], [NaN]])(
    "omitBy errors",
    (value) => {
      expect(() => omitBy(value)).toThrow(TypeError);
    }
  );
});
