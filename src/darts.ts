export function calcPoints(input: string): number {
  if (!input.trim()) return 0;
  const parts = input.trim().split(" ").map(Number);
  if (parts.length % 2 !== 0) throw new Error("Incomplete throw sequence");

  let total = 0;
  for (let i = 0; i < parts.length; i += 2) {
    total += parts[i] * parts[i + 1];
  }
  return total;
}

export function possibleCheckout(currentScore: number): string | null {
  const remaining = 501 - currentScore;
  if (remaining % 2 !== 0) return null;
  const doubleValue = remaining / 2;
  if (doubleValue > 20) return null;
  return `Double ${doubleValue}`;
}
