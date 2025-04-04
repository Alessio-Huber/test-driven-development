import { formatDuration } from './duration';

describe('formatDuration', () => {
  test('should format seconds correctly', () => {
    expect(formatDuration(33)).toBe('33s');
  });

  test('should format minutes and seconds correctly', () => {
    expect(formatDuration(123)).toBe('2m3s');
    expect(formatDuration(500)).toBe('8m20s');
  });

  test('should format hours correctly', () => {
    expect(formatDuration(3600)).toBe('1h');
  });

  test('should format hours, minutes, and seconds correctly', () => {
    expect(formatDuration(3999)).toBe('1h6m39s');
  });

  test('should handle 0 seconds', () => {
    expect(formatDuration(0)).toBe('0s');
  });

  test('should throw an error for negative numbers', () => {
    expect(() => formatDuration(-1)).toThrow("Eingabe muss eine nicht-negative Zahl sein.");
  });

  test('should round fractional seconds', () => {
    expect(formatDuration(123.7)).toBe('2m4s');
  });
});
