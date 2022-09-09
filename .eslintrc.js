module.exports = {
  root: true,
  extends: ['standard-react-ts'],
  globals: {
    __isBrowser__: 'readonly',
  },
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/no-extraneous-class': 0,
    '@typescript-eslint/indent': 0,
    'comma-dangle': 'off',
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/restrict-plus-operands': 0,
    '@typescript-eslint/consistent-type-definitions': 0,
  },
};
