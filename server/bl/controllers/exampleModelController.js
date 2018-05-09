'use strict';

const winston = require('winston');
const app = require('../../server');
const exampleModelHelper = require('../helpers/exampleModelHelper');

/**
 * JSDOC EXAMPLE
 *
 * Example comment...
 *
 * @param inputVariable
 * @param cb
 */
function getCustomExampleModels(inputVariable, cb) {
    const queryString = 'SELECT * FROM TABLENAME';

    // example native sql script call
    app.dataSources.datasourcename.connector.execute(queryString, [], function (err, data) {
        if (err) {
            winston.error(err);
            return cb(err);
        }

        exampleModelHelper.exampleHelperWithCb('input', function(err, dataFromHelper) {
            if (err) {
                winston.error(err);
                return cb(err);
            }

            const result = exampleModelHelper.exampleHelperWithoutCb(dataFromHelper);

            return cb(null, result);
        });
    });
}

module.exports.getCustomExampleModels = getCustomExampleModels;
