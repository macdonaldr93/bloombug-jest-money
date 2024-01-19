import { Currency } from '../types';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Assert whether currency is equal to another or not.
       * @param {Currency} currency - Currency to compare to
       * @example
       * expect(money.currency).toEqualCurrency(CAD)
       */
      toEqualCurrency(currency: Currency): R;
    }
  }
}

export default function toEqualCurrency(
  this: jest.MatcherUtils,
  received: Currency,
  expected: Currency
) {
  if (received.isoCode === expected.isoCode) {
    return {
      pass: true,
      message: () =>
        `Expected ${received.isoCode} not to equal ${expected.isoCode}`,
    };
  }

  return {
    pass: false,
    message: () => `Expected ${received.isoCode} to equal ${expected.isoCode}`,
  };
}
