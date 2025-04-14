import { play } from "./rock-paper-scissors";

describe("Rock Paper Scissors", () => {
  test.each([
    ["rock", "scissors", 1],
    ["scissors", "paper", 1],
    ["paper", "rock", 1],
    ["scissors", "rock", 2],
    ["paper", "scissors", 2],
    ["rock", "paper", 2],
    ["rock", "rock", 0],
    [" paper ", "PaPer", 0]
  ])("play(%s, %s) should return %d", (p1, p2, result) => {
    expect(play(p1, p2)).toBe(result);
  });

  test("throws error on invalid input", () => {
    expect(() => play("banana", "rock")).toThrow("Invalid move");
  });
});
