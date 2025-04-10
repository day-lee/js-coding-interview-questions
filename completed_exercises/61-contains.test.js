const contains = require("./61-contains.js");

describe("contains test", () => {
 // test.todo("contains on empty object returns false");
  test("empty object, return false", () => {
    const obj = {};
    const result = false;
    expect(contains(obj, "a")).toEqual(result);
  });

  test("should return true when passed to contains with an existing property name", () => {
    const obj = { a: 1, b: 2 };
    const result = true;
    expect(contains(obj, "a")).toEqual(result);
  });

  test("should return false, when passed to non-existent property name", () => {
    const obj = { a: 1, b: 2 };
    const result = false;
    expect(contains(obj, "c")).toEqual(result);
  });

  test("should throw an error when invalid parameter like an array was passed as an argument", () => {
    const obj = [1, 2, 3];
    expect(() => contains(obj, "a")).toThrow("Error");
  });
});
