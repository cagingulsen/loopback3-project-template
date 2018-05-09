const chai = require('chai');
const assert = chai.assert;

describe('Smoke test', function () {
    it('should return true for 1 = 1', function () {
        assert.equal(1, 1);
    });
    
    // stop tests if the test fails
    afterEach(function() {
        if (this.currentTest.state === 'failed') {
            process.exit(1);
        }
    });
});
