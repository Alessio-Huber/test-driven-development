import { isValid } from "./isbn13";

describe("ISBN-13 Validation", () => {
  test.each([
    ["9783161484100", true],
    ["9781861972712", true],
    ["9781861972713", false],
    ["1234567890128", true],
    ["1234567890123", false]
  ])("isValid(%s) should return %s", (isbn, expected) => {
    expect(isValid(isbn)).toBe(expected);
  });

  test("invalid if not 13 digits", () => {
    expect(isValid("123")).toBe(false);
  });
});
