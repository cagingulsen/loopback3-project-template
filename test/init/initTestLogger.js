const config = require('../testConfig.json');
const winston = require('winston');
const fs = require('fs');

const tsFormat = () => (new Date()).toLocaleString();
const logDir = config.logDir;

function setup() {
    // create log directory if it does not exist
    if (logDir !== '' && !fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    }
}

module.exports.logger = new (winston.Logger)({
    transports: [
        // colorize the output to the console
        new (winston.transports.Console)({
            timestamp: tsFormat,
            colorize: true,
            level: 'info',
            silent: false,
        }),
        new (winston.transports.File)({
            filename: logDir + config.testInfoLogFileName,
            datePattern: config.logDatePattern,
            prepend: true,
            localTime: true,
            createTree: true,
            timestamp: tsFormat,
            maxsize: config.maxLogSize,
            maxFiles: config.maxLogFileNumber,
            level: process.env.NODE_ENV === 'test' ? 'error' : 'info',
        }),
    ],
});

module.exports.setup = setup;
