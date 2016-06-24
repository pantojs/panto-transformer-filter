/**
 * Copyright (C) 2016 panto.xyz
 * index.js
 *
 * changelog
 * 2016-06-22[09:49:10]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
'use strict';

const Transformer = require('panto-transformer');
const minimatch = require('minimatch');

class FilterTransformer extends Transformer {
    _transform(file) {
        const {
            pattern
        } = this.options;

        const match = pattern => {
            if (panto.util.isString(pattern) && minimatch(file.filename, pattern)) {
                return true;
            } else if (panto.util.isRegExp(pattern) && pattern.test(file.filename)) {
                return true;
            } else if (panto.util.isFunction(pattern) && pattern(file)) {
                return true;
            }

            return false;
        };

        let matched = false;

        if (Array.isArray(pattern)) {
            matched = pattern.some(match);
        } else {
            matched = match(pattern);
        }

        return Promise.resolve(matched ? file : null);
    }
}

module.exports = FilterTransformer;