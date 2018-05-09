const config = require('../testConfig.json');

module.exports = {
    server: config.testDbServer,
    database: config.testDbName,
    user: config.testDbUser,
    password: config.testDbPassword,
    requestTimeout: config.testDbRequestTimeout,
};
