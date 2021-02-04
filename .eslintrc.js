module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    extends: [
      'airbnb-base',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {
      indent: 0,
      'no-undef': 0,
      'arrow-parens': 0,
      'no-plusplus': 0,
      'no-restricted-syntax': 0,
      'no-param-reassign': 0,
    },
};
