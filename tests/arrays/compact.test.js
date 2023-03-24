const compact = require("../../src/arrays/compact");
var _ = require("lodash");

describe("compact", () => {
  test.each([
    [[0, 1, false, 2, "", 3]],
    [[1, 2, 3]],
    [[false, null, 0, "", undefined, NaN]],
    [[]],
  ])("Creates an array with all falsey values removed", (array) => {
    expect(compact(array)).toEqual(_.compact(array));
  });
  test.each([[1], ["string"], [false], [{}], [undefined], [null], [NaN]])(
    "compact errors",
    (value) => {
      expect(() => compact(value)).toThrow(TypeError);
    }
  );
});
