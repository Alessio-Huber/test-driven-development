export function play(p1: string, p2: string): number {
  const clean = (s: string) => s.trim().toLowerCase();
  const valid = ["rock", "paper", "scissors"];
  const a = clean(p1);
  const b = clean(p2);

  if (!valid.includes(a) || !valid.includes(b)) {
    throw new Error("Invalid move");
  }

  if (a === b) return 0;
  if ((a === "rock" && b === "scissors") || (a === "scissors" && b === "paper") || (a === "paper" && b === "rock")) {
    return 1;
  }
  return 2;
}
