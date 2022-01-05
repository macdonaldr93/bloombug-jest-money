# @bloombug/jest-money

Jest matchers for [@bloombug/money](https://github.com/macdonaldr93/bloombug-money).

## Installation

```shell
npm install @bloombug/jest-money --save
```

```shell
yarn add @bloombug/jest-money
```

Import `@bloombug/jest-money` once (for instance in your [tests setup file](https://jestjs.io/docs/en/configuration.html#setupfilesafterenv-array)) and you're good to go:

```js
// In your own jest-setup.js (or any other name)
import '@bloombug/jest-money';

// In jest.config.js add (if you haven't already)
setupFilesAfterEnv: ['<rootDir>/jest-setup.js'];
```

### TypeScript

If you're using TypeScript, make sure your setup file is a .ts and not a .js to include the necessary types.

You will also need to include your setup file in your tsconfig.json if you haven't already:

```
// In tsconfig.json
"include": [
  ...
  "./jest-setup.ts"
],
```

## Custom matchers

### toEqualCurrency

This allows you to check whether a currency is equal to another.

```js
expect(Currency(USD)).toEqualCurrency(Currency(USD));
expect(Currency(USD)).not.toEqualCurrency(Currency(CAD));
```

### toEqualMoney

This allows you to check whether a money is equal to another.

```js
expect(Money(100, USD)).toEqualCurrency(Money(100, USD));
expect(Money(100, USD)).not.toEqualCurrency(Money(100, CAD));
```

## Docs

See [docs site](https://macdonaldr93.github.io/bloombug-money/#/) for more details, API, and other docs.
