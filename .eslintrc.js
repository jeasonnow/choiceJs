module.exports = {
  root: true,
  parser: 'typescript-eslint-parser',
  env: {
    node: true,
    es6: true
  },
  plugins: [
    "typescript"
  ],
  extends: [
    'standard',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prefer-promise-reject-errors': 0,
    'prettier/prettier': 1,
    'typescript/class-name-casing': 1
  }
};
