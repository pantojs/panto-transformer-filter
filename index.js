/**
 * Copyright (C) 2016 panto.xyz
 * index.js
 *
 * changelog
 * 2016-06-22[09:49:10]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.4
 * @since 0.1.0
 */
'use strict';

const Transformer = require('panto-transformer');

class FilterTransformer extends Transformer {
    _transform(file) {
        const {
            pattern
        } = this.options;

        const match = pattern => {
            if ((panto._.isString(pattern) || Array.isArray(pattern)) && panto.file.match(file.filename,
                    pattern).length) {
                return true;
            } else if (panto._.isRegExp(pattern) && pattern.test(file.filename)) {
                return true;
            } else if (panto._.isFunction(pattern) && pattern.call(file, file)) {
                return true;
            }

            return false;
        };

        return Promise.resolve(match(pattern) ? file : null);
    }
    isCacheable() {
        return false;
    }
}

module.exports = FilterTransformer;