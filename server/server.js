'use strict';

const loopback = require('loopback');
const boot = require('loopback-boot');
const winston = require('winston');

const app = module.exports = loopback();

app.start = function() {
    winston.info('Starting loopback3-project-template Server...');
    
    // start the web server
    return app.listen(function() {
        app.emit('started');
        const baseUrl = app.get('url').replace(/\/$/, '');
        winston.info('Web server listening at: %s', baseUrl);
        if (app.get('loopback-component-explorer')) {
            const explorerPath = app.get('loopback-component-explorer').mountPath;
            winston.info('Browse your REST API at %s%s', baseUrl, explorerPath);
        }
    });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
    if (err) throw err;

    // start the server if `$ node server.js`
    if (require.main === module)
        app.start();
});
