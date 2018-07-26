let assert = require('assert')
let yearsAgo = require('../yearsAgo')

describe('yearsAgo', function() {
  it('should show you the difference between 2018 and 1976', function() {
    assert.equal(yearsAgo('1976'), 42)
  });
  it('should only give you an answer that is 42, 50 is invalid', function() {
    assert.notEqual(yearsAgo('1976'), 50)
  });
  it('should give you an error message', function() {
    assert.notEqual(yearsAgo('1976'), 'error')
  });
});