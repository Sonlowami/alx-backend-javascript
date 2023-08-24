const calculateNumber = require('./1-calcul.js')
const assert = require('assert')

describe('Test calculateNumber using assert', function() {
  it('test sum with 2 integers', function() {
    assert.equal(calculateNumber('SUM', 2, 3), 5);
  });
  it('test sum with 2 floats', function() {
    assert.equal(calculateNumber('SUM', 0.7, 2.4), 3);
  });
  it('test sub with two integers', function() {
    assert.equal(calculateNumber('SUBTRACT', 4, 1), 3);
  });
  it('test sub with two floats', function() {
    assert.equal(calculateNumber('SUBTRACT', 4.6, 1.9), 3)
  });
  it('test divide with two integers', function() {
    assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
  });
  it('test divide with two floats', function() {
    assert.equal(calculateNumber('DIVIDE', 4.6, 1.9), 2.5);
  });
  it('test divide with a 0 denominator', function() {
    assert.equal(calculateNumber('DIVIDE', 4.4, 0.1), 'Error');
  });
});
