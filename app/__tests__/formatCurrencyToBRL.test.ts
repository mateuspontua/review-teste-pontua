import { describe, expect, it } from "vitest";
import { formatCurrencyToBRL } from "~/utils/formatCurrencyToBRL";

describe('formatCurrencyToBRL Utility', () => {
  it('should format number to BRL currency string', () => {
    const formatted = formatCurrencyToBRL(1234.56);
    expect(formatted).toBe('R$ 1.234,56');
  });
  it('should handle zero value', () => {
    const formatted = formatCurrencyToBRL(0);
    expect(formatted).toBe('R$ 0,00');
  });
  it('should handle negative values', () => {
    const formatted = formatCurrencyToBRL(-987.65);
    expect(formatted).toBe('-R$ 987,65');
  });
  it('should format error for non-number inputs', () => {
    // @ts-expect-error Testing invalid input
    const formatted = formatCurrencyToBRL("1234.56");
    expect(formatted).not.toBe('R$ 1.234,56');
  })
})