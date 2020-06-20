module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort'
  ],
  rules: {
    "quotes": [2, "double"],
    "react/jsx-filename-extension": [1, { "extensions": [".jsx", "tsx"] }],
    '@typescript-eslint/no-var-requires': 0,
    "@typescript-eslint/no-use-before-define": "off",
    "simple-import-sort/sort": "error"
  },
};
