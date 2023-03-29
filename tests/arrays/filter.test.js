const filter = require("../../src/arrays/filter");
var _ = require("lodash");

describe("filter", () => {
  test("Iterates over elements of array, returning an array of all elements predicate returns truthy for", () => {
    const users = [
      { user: "barney", age: 36, active: true },
      { user: "fred", age: 40, active: false },
    ];
    expect(
      filter(users, function (value) {
        return !value.active;
      })
    ).toEqual(
      _.filter(users, function (value) {
        return !value.active;
      })
    ),
      expect(
        filter(users, function (value, index) {
          return index < 1;
        })
      ).toEqual(
        _.filter(users, function (value, index) {
          return index < 1;
        })
      );
  });
  test.each([[1], ["string"], [false], [{}], [undefined], [null], [NaN]])(
    "filter errors",
    (value) => {
      expect(() => filter(value)).toThrow(TypeError);
    }
  );
});
