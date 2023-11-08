module.exports = {
  env: {
    es2021: true,
    node: true,
  },

  extends: [
    '@inmeta/eslint-config-base',
    'plugin:prettier/recommended',
  ],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: [
    'prettier',
    'unused-imports',
    'eslint-plugin-import-helpers',
  ],

  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        tabWidth: 2,
        semi: false,
        endOfLine: 'auto',
      },
    ],
    'no-new': 'off',
    'no-console': 'off',
    'max-classes-per-file': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'no-prototype-builtins': 'off',
    'no-useless-constructor': 'off',
    'class-methods-use-this': 'off',
    'no-use-before-define': ['off'],
    'import/prefer-default-export': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^@server/shared/',
          '/^@/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
    'no-redeclare': ['error'],
    curly: ['error'],
    eqeqeq: ['error'],
    'no-irregular-whitespace': ['error'],
    camelcase: ['error'],
    '@typescript-eslint/camelcase': 'off',
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '_',
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/type-annotation-spacing': ['error'],
  },
}
