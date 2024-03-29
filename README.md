<h1 align="center">@inmeta/eslint-config</h1>

<p align="center">
  <img src="https://public-assets-inmeta.s3.amazonaws.com/app-logo.png" width="120">
  <br>
  <br>
  <em>Default INMETA ESLint rules for <br>different frameworks/projects</em>
  <br>
</p>

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

## Usage

This is a monorepo, currently with two packages:
- ``@inmeta/eslint-config-node``
- ``@inmeta/eslint-config-quasar``

1. Install one of the packages (e.g. ``@inmeta/eslint-config-node``)
```sh
yarn add eslint @inmeta/eslint-config-node --dev
```

2. Create a [ESLint config file](https://eslint.org/docs/latest/use/configure/) extending the config:
```json
{
  "extends": "@inmeta/eslint-config-node"
}
```
