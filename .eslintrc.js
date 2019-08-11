module.exports = {
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  env: {
    'browser': true,
    'jasmine': true,
    'jest': true,
    'node': true,
  },
  rules: {
    'prettier/prettier': ['error', { 'singleQuote': true }],
    '@typescript-eslint/explicit-function-return-type': [0],
    '@typescript-eslint/no-use-before-define': [0],
    '@typescript-eslint/no-empty-interface': [0],
    '@typescript-eslint/explicit-member-accessibility': [0],
    '@typescript-eslint/no-explicit-any': [0],
    'no-console': [0],
  },
  parserOptions: {
    ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',  // Allows for the use of imports
  },
};
