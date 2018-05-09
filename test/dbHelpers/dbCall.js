const logger = require('../init/initTestLogger').logger;
const sql = require('YOUR SQL LIBRARY');

function dbCall(script, dbConfig) {
    return new Promise(function (resolve, reject) {
        const connection = new sql.ConnectionPool(dbConfig);
        
        connection.connect()
            .then(result => {
                // create Request object
                const request = new sql.Request(connection);
                
                return request.query(script);
            })
            .then(records => {
                connection.close();
                return resolve(records);
            })
            .catch(err => {
                if (connection) {
                    connection.close();
                }
                logger.error('Cannot execute sql script. ' + err);
                return reject(err);
            });
    });
}

module.exports = dbCall;
