const sql = require('YOUR SQL LIBRARY');
const fs = require('fs');
const prepare = require('mocha-prepare');
const customTestLogger = require('../init/initTestLogger');
const dbConfig = require('./dbConfig');

// called before loading of test cases
prepare(function (done) {
    customTestLogger.setup();
    const logger = customTestLogger.logger;
    
    logger.info('Starting tests for the example project.');
    
    const connection = new sql.ConnectionPool(dbConfig);
    
    // to be used for integration, unit, etc. tests
    connection.connect(function (err) {
        if (err) {
            logger.error('Cannot connect to test database ' + err);
            done();
        }
        
        const initSqlStr = fs.readFileSync('./test/dbScripts/initTestDb.sql').toString();
        
        // create Request object
        const request = new sql.Request(connection);
        request.query(initSqlStr, function (err, records) {
            if (err) {
                logger.error('Cannot execute init database script ' + err);
            } else {
                logger.info('Test Database initialization successful!');
                connection.close();
                done();
            }
        });
    });
}, function (done) {
    // called after all test completes (regardless of errors)
    const logger = customTestLogger.logger;
    
    const connection = new sql.ConnectionPool(dbConfig);
    const dropSqlStr = fs.readFileSync('./test/dbScripts/dropTestDb.sql').toString();
    
    connection.connect(function (err) {
        if (err) {
            logger.info('Cannot connect to test database ' + err);
            done();
        }
        
        // create Request object
        const request = new sql.Request(connection);
        request.query(dropSqlStr, function (err, records) {
            if (err) {
                logger.error('Cannot execute drop database script ' + err);
                logger.info('Testing completed.');
            } else {
                logger.info('Test Database drop successful!');
                connection.close();
                
                logger.info('Testing completed.');
                done();
                process.exit(1);
            }
        });
    });
});
