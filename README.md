# eslint-config-inmeta

Default INMETA ESLint rules for different frameworks/projects

## Usage

1. Install the dependencies
```
yarn add eslint @inmetasoft/eslint-config --dev
```

2. Create a [ESLint config file](https://eslint.org/docs/latest/use/configure/) extending the config:
```
{
  "extends": "@inmetasoft/eslint-config/PLATFORM"
}
```

Where ``PLATFORM`` is one of:
- node
- quasar
