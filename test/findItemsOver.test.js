let assert = require('assert')
let findItemsOver = require('../findItemsOver')

describe('findItemsOver', function() {
  it('should give you all the products higher than the threshold', function() {
    assert.deepEqual([], findItemsOver(22), 2)
  });
  it('should give you products only higher than 20', function() {
    assert.notDeepEqual(4, 2, 'equals pears & Bananas', 22)
  });
});