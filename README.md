# Inmeta ESLint config

## Whats included?

- Standard config base;
- Node plugin;
- Vue plugin;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

1. Install the dependencies
```
npm i -D eslint @inmetasoft/eslint-config
```

2. Create a `.eslintrc.json` file extending the config:
```
{
  "extends": "@inmetasoft/eslint-config/react"
  // "extends": "@inmetasoft/eslint-config/node"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.
