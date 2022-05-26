# @tidy-all/eslint [![npm version](https://badge.fury.io/js/@tidy-all%2Feslint.svg)](https://badge.fury.io/js/@tidy-all%2Feslint)

> quick clean for you code🐱‍👤✔

# install

```
npm install @tidy-all/eslint
or pnpm add -D @tidy-all/eslint
```

# example

config in your .eslintrc.json or .js

```
module.exports = {
  extends: [require.resolve('@tidy-all/eslint/src/reactES')],
  rules: {...} // overwrite
}
```

and, setup .prettierrc.js

```
module.exports = {
  ...require('@tidy-all/eslint/src/prettier'),
}
```
