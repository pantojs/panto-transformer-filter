# panto-transformer-filter
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Coverage Status][coveralls-image]][coveralls-url]

Filter transformer for panto.

```js
panto.loadTransformer('filter');

panto.pick('**/*').filter({
    pattern: [/.js$/, filename => {
        return filename[0] === 'a';
    }, 'src/**/*']
}).read();
```

## options
 - pattern: array|regexp|string|function

[npm-url]: https://npmjs.org/package/panto-transformer-filter
[downloads-image]: http://img.shields.io/npm/dm/panto-transformer-filter.svg
[npm-image]: http://img.shields.io/npm/v/panto-transformer-filter.svg
[travis-url]: https://travis-ci.org/pantojs/panto-transformer-filter
[travis-image]: http://img.shields.io/travis/pantojs/panto-transformer-filter.svg
[david-dm-url]:https://david-dm.org/pantojs/panto-transformer-filter
[david-dm-image]:https://david-dm.org/pantojs/panto-transformer-filter.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/panto-transformer-filter#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/pantojs/panto-transformer-filter/dev-status.svg
[coveralls-image]:https://coveralls.io/repos/github/pantojs/panto-transformer-filter/badge.svg?branch=master
[coveralls-url]:https://coveralls.io/github/pantojs/panto-transformer-filter?branch=master
