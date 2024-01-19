import { Money } from '../types';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Assert whether money is equal to another or not.
       * @param {Money} money - Money to compare to
       * @example
       * expect(Money(100, 'CAD')).toEqualMoney(Money(100, 'CAD'))
       */
      toEqualMoney(money: Money): R;
    }
  }
}

export default function toEqualMoney(
  this: jest.MatcherUtils,
  received: Money,
  expected: Money
) {
  if (received.equals(expected)) {
    return {
      pass: true,
      message: () =>
        `Expected ${received.toString()} not to equal ${expected.toString()}`,
    };
  }

  return {
    pass: false,
    message: () =>
      `Expected ${received.toString()} to equal ${expected.toString()}`,
  };
}
