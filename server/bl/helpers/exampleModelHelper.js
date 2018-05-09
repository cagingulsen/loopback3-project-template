'use strict';

const winston = require('winston');

/**
 * Async helper function example
 *
 * @param inputVariable
 * @param cb
 */
function exampleHelperWithCb(inputVariable, cb) {
    myAsyncOperation(inputVariable, function(err, data) {
        if (err) {
            winston.log(err);
            return cb(err);
        }

        return cb(null, data);
    });
}

/**
 * Sync helper function example
 *
 * @param inputVariable
 */
function exampleHelperWithoutCb(inputVariable) {
    return inputVariable + ' :)';
}

const myAsyncOperation = function(inputNumber, cb) {
    cb(null, inputNumber);
};

module.exports.exampleHelperWithCb = exampleHelperWithCb;
module.exports.exampleHelperWithoutCb = exampleHelperWithoutCb;
