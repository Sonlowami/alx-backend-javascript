const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', function() {
  it('test calculateNumber', function() {
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
});
