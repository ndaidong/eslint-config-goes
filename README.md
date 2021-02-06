# eslint-config-goes
Google's JavaScript style mixed with ESLint recommended rules

[![NPM](https://badge.fury.io/js/eslint-config-goes.svg)](https://badge.fury.io/js/eslint-config-goes)
![CI test](https://github.com/ndaidong/eslint-config-goes/workflows/ci-test/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/ndaidong/eslint-config-goes/badge.svg)](https://coveralls.io/github/ndaidong/eslint-config-goes)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ndaidong_eslint-config-goes&metric=alert_status)](https://sonarcloud.io/dashboard?id=ndaidong_eslint-config-goes)


# Usage

In order to use this shareable config you have to install the package "eslint-config-goes" into your project:

```bash
npm i -D eslint-config-goes
```

Then, create ESLint config file named ".eslintrc.json" (or edit if it exists). The content is short as below:

*.eslintrc.json*
```json
{
  "extends": "eslint-config-goes"
}
```

That's all. It will works.


# References:

- [ESLint Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)


# License

The MIT License (MIT)
