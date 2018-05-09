const chai = require('chai');
const assert = chai.assert;
const dbConfig = require('../init/dbConfig');
const dbCall = require('../dbHelpers/dbCall');

// smoke test first
require('../smoke/_smoke.test');

describe('Integration test', function () {
    it('should be able to fetch data from DB', function (done) {
        const smokeSql = 'SELECT * FROM smokeTable;';
        
        dbCall(smokeSql, dbConfig)
            .then(records => {
                assert.equal(records.recordset.length, 2);
                assert.equal(records.recordset[0].smokeID, 1);
                assert.equal(records.recordset[0].smokeName, 'Smoke1');
                assert.equal(records.recordset[1].smokeID, 32);
                assert.equal(records.recordset[1].smokeName, 'Smoke32');
                done();
            })
            .catch(err => {
                return done(err);
            });
    });
    
    // stop tests if the test fails
    afterEach(function() {
        if (this.currentTest.state === 'failed') {
            process.exit(1);
        }
    });
});
