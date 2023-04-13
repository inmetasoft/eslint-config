module.exports = {
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
  },

  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'standard',
  ],

  plugins: [
    // required to apply rules which need type information
    '@typescript-eslint',
    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    // required to lint *.vue files
    'vue',
  ],

  globals: {
    ga: 'readonly', // Google Analytics
    cordova: 'readonly',
    __statics: 'readonly',
    __QUASAR_SSR__: 'readonly',
    __QUASAR_SSR_SERVER__: 'readonly',
    __QUASAR_SSR_CLIENT__: 'readonly',
    __QUASAR_SSR_PWA__: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly',
  },

  rules: {
    quotes: ['warn', 'single', { avoidEscape: true }],
    'vue/no-v-html': 'off',
    'vue/attributes-order': 'off',
    'vue/no-mutating-props': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/order-in-components': 'off',
    'vue/no-unused-components': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/no-multiple-template-root': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: 1,
        multiline: 1,
      },
    ],
    'vue/first-attribute-linebreak': [
      'warn',
      {
        singleline: 'ignore',
        multiline: 'below',
      },
    ],
    'vue/html-closing-bracket-newline': [
      'warn',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-indent': [
      'warn',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
  },
}
