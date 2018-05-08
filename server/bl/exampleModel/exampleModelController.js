'use strict';

const winston = require('winston');
const app = require('../../server');
const exampleModelHelper = require('./exampleModelHelper');

/**
 * JSDOC EXAMPLE
 *
 * Example comment...
 *
 * @param inputVariable
 * @param cb
 */
function getCustomExampleModels(inputVariable, cb) {
    // TODO write tasks to do, like this
    // FIXME write bugs to fix, like this

    const queryString = 'SELECT TOP 1000 * FROM TABLENAME';

    // example native sql script call
    // TODO use promise
    app.dataSources.modelname.connector.execute(queryString, [], function (err, data) {
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
