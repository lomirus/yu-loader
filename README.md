<div align="center">
  <a href="https://github.com/Markovchaloven">
    <img width="200" height="200" src="https://avatars.githubusercontent.com/u/87082575?v=4">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![cover][cover]][cover-url]
[![size][size]][size-url]

# yu-loader

A Yu loader for MaJs. Compiles MaJs to JS.

## Getting Started

To begin, you'll need to install `yu-loader`:

```console
$ npm install yu-loader --save-dev
```

Then add the loader to your `webpack` config. For example:

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.ma(\.js)?$/i,
        loader: "yu-loader",
      },
    ],
  },
};
```

And run `webpack` via your preferred method.

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/yu-loader.svg
[npm-url]: https://npmjs.com/package/yu-loader
[node]: https://img.shields.io/node/v/yu-loader.svg
[node-url]: https://nodejs.org
[cover]: https://codecov.io/gh/lomirus/yu-loader/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/lomirus/yu-loader
[size]: https://packagephobia.now.sh/badge?p=yu-loader
[size-url]: https://packagephobia.now.sh/result?p=yu-loader