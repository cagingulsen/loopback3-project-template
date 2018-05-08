'use strict';

const exampleModelController = require('../../server/bl/exampleModel/exampleModelController');

module.exports = function(Examplemodel) {
    Examplemodel.customExampleModels = function (inputVariable, cb) {
        exampleModelController.getCustomExampleModels(inputVariable,
            function (err, data) {
                if (err) {
                    return cb(err);
                }
                cb(null, data);
            }
        );
    };

    Examplemodel.remoteMethod('customExampleModels', {
        http: { path: '/customExampleModels', verb: 'get', },
        description: ['Description of the endpoint.',],
        accepts: [
            { arg: 'inputVariable', type: 'number', },
        ],
        returns: { arg: 'result', type: 'number', },
    });
};
