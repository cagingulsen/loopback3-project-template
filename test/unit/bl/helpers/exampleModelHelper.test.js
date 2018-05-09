const chai = require('chai');
const assert = chai.assert;
const helperMethods = require('../../../../server/bl/helpers/exampleModelHelper');

describe('helperMethods', function() {
    it('should add a smiley at the end of input', function() {
        const result = helperMethods.exampleHelperWithoutCb('Hi!');
    
        assert.equal(result, 'Hi! :)');
    });
});
