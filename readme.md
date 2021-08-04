## ElaString - Fluent Chainable String Mutation

[![Version](https://badge.fury.io/gh/hisorange%2Felastring.svg)](https://badge.fury.io/gh/hisorange%2Felastring)
[![Build](https://github.com/hisorange/elastring/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/hisorange/elastring/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/hisorange/elastring/badge.svg)](https://coveralls.io/github/hisorange/elastring)
[![GitHub license](https://img.shields.io/github/license/hisorange/elastring)](https://github.com/hisorange/elastring/blob/main/LICENSE)

Opionated fluent string mutations; You can use this package when the input is coming from a user or any other unregulated source, and you want to use the string in a normalized and formated way.

### Getting Started

---

```sh
npm i @hisorange/elastring
# or
yarn add @hisorange/elastring
```

### Examples

---

```ts
import { Elastring } from '@hisorange/elastring';

const str = new Elastring('ORMDriver');

console.log(str.snakeCase.toString()); // orm_driver
console.log(str.pascalCase.suffix('.html').toString()); // OrmDriver.html
console.log(str.upperCase.toString()); // ORMDRIVER
console.log(`${str.pathCase.prefix('../').suffix('.js')} at!`); // ../orm/driver.js at!
```

### Transformations

---

| Fun                  | Input                   | Output       | Normalized |
| -------------------- | ----------------------- | ------------ | :--------: |
| **singular**         | child                   | children     |     x      |
| **pascalCase**       | ela-string              | ElaString    |     x      |
| **plural**           | children                | child        |     ✓      |
| **camelCase**        | ela string              | elaString    |     ✓      |
| **kebabCase**        | ElaString               | ela-string   |     ✓      |
| **snakeCase**        | ElaString               | ela_string   |     ✓      |
| **dotCase**          | ElaString               | ela.string   |     ✓      |
| **humanCase**        | ela_string              | Ela string   |     ✓      |
| **titleCase**        | ela_string              | Ela String   |     ✓      |
| **upperCase**        | ela_string              | ELA_STRING   |     x      |
| **lowerCase**        | ELA_STRING              | ela_string   |     x      |
| **capitalCase**      | ela string              | Ela-string   |     x      |
| **vacuumCase**       | ela string              | elastring    |     x      |
| **pathCase**         | ela string              | ela/string   |     ✓      |
| **prefix()**         | string.prefix('ela')    | elastring    |     x      |
| **suffix()**         | ela.suffix('string.js') | elastring.js |     x      |
| **stripExtension()** | elastring.js            | elastring    |     x      |
| **reverse**          | elastring               | gnirtsale    |     x      |

### Technicalities

---

**TypeScript**: Everything is written in typescript from the get go, so You can have the best DX possible :)

**Normalization**: Some transformer will normalize the string first, this is there to avoid the weird side effects of some format to format conversion.

**Immutable**: After initialization the strings are immutable, so every call will create a new instance with the expected format, this is useful behavior when a string need in multiple format but be aware this is a computation heavy solution, so it's not advised to be used a in a high performance demanding environments.

**Versioning**: SemVer! But be aware if there is a behavior change then it will break compatibility so the major release will be changed, currently running ~110 test to ensure consistency but there are always edge cases, so each edge case will be fixed with a major release to avoid ruining someones setup on that case.

### Links

---

- [GitHub](https://github.com/hisorange/elastring)
- [NPM](https://www.npmjs.com/package/@hisorange/elastring)
- [GPM](https://github.com/hisorange/elastring/packages/926718)

### Changelog

---

#####

- Added the reverse transformation

##### 1.0.0 - Initial Release
