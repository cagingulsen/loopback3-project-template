'use strict';

const customLogger = require('../bl/init/initLogger');

/**
 * Starting point of the application.
 */
module.exports = function() {
    if (process.env.NODE_ENV === 'test') {
        return;
    }
    
    initializeSystemVariables();
};

/**
 * Initializes logger and variables needed for the app.
 */
function initializeSystemVariables() {
    customLogger.setup();
    // const logger = customLogger.logger;
    
    // init other variables here
}
