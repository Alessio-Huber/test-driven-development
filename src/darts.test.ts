import { calcPoints, possibleCheckout } from "./darts";

describe("calcPoints", () => {
  test("calculates points correctly", () => {
    expect(calcPoints("3 20 1 17 2 4")).toBe(85);
    expect(calcPoints("2 15 1 18 3 19")).toBe(105);
    expect(calcPoints("3 20 1 5")).toBe(65);
  });

  test("handles empty or bad input", () => {
    expect(calcPoints("")).toBe(0);
    expect(() => calcPoints("3 20 1")).toThrow("Incomplete throw sequence");
  });
});

describe("possibleCheckout", () => {
  test("returns Double X when checkout is possible", () => {
    expect(possibleCheckout(477)).toBe("Double 12");
  });

  test("returns null when impossible (odd points)", () => {
    expect(possibleCheckout(480)).toBe(null);
  });

  test("returns null when double > 20", () => {
    expect(possibleCheckout(441)).toBe(null); // 501 - 441 = 60 -> 30
  });
});
