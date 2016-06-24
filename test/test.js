/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-06-24[16:10:03]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
'use strict';
const assert = require('assert');
const panto = require('panto');
const FilterTransformer = require('../');

describe('panto-transformer-filter', () => {
    describe('#transform', () => {
        it('should return null if not matched', done => {
            const file = {
                filename: 'mark.js'
            };

            new FilterTransformer({
                pattern: '*.css'
            }).transform(file).then(tfile => {
                assert.deepEqual(tfile, null);
            }).then(() => {
                done();
            });
        });
        it('should support string pattern', done => {
            const file = {
                filename: 'mark.js'
            };

            new FilterTransformer({
                pattern: 'm*k.js'
            }).transform(file).then(tfile => {
                assert.deepEqual(tfile, file);
            }).then(() => {
                done();
            });
        });
        it('should support regexp pattern', done => {
            const file = {
                filename: 'mark.js'
            };

            new FilterTransformer({
                pattern: /^m\w+\.js/
            }).transform(file).then(tfile => {
                assert.deepEqual(tfile, file);
            }).then(() => {
                done();
            });
        });
        it('should support function pattern', done => {
            const file = {
                filename: 'mark.js'
            };

            new FilterTransformer({
                pattern: file => {
                    return file.filename === 'mark.js'
                }
            }).transform(file).then(tfile => {
                assert.deepEqual(tfile, file);
            }).then(() => {
                done();
            });
        });
        it('should support array pattern', done => {
            const file = {
                filename: 'mark.js'
            };

            new FilterTransformer({
                pattern: [/^m\w+\.js/, 'm*k.js']
            }).transform(file).then(tfile => {
                assert.deepEqual(tfile, file);
            }).then(() => {
                done();
            });
        });
    });
});