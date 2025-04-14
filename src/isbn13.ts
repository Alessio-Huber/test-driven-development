export function isValid(isbn: string): boolean {
  if (!/^\d{13}$/.test(isbn)) return false;

  const digits = isbn.split("").map(Number);
  const check = digits.pop()!;
  const sum = digits.reduce((acc, d, i) => acc + d * (i % 2 === 0 ? 1 : 3), 0);
  const calc = (10 - (sum % 10)) % 10;

  return check === calc;
}
