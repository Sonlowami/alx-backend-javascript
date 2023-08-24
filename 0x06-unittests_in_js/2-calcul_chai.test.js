const calculateNumber = require('./2-calcul_chai.js')
const chai = require('chai')
const expect = chai.expect;

describe('Test calculateNumber using chai', function() {
  it('test sum with 2 integers', function() {
    expect(calculateNumber('SUM', 2, 3)).to.equal(5);
  });
  it('test sum with 2 floats', function() {
    expect(calculateNumber('SUM', 0.7, 2.4)).to.equal(3);
  });
  it('test sub with two integers', function() {
    expect(calculateNumber('SUBTRACT', 4, 1)).to.equal(3);
  });
  it('test sub with two floats', function() {
    expect(calculateNumber('SUBTRACT', 4.6, 1.9)).to.equal(3)
  });
  it('test divide with two integers', function() {
    expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
  });
  it('test divide with two floats', function() {
    expect(calculateNumber('DIVIDE', 4.6, 1.9)).to.equal(2.5);
  });
  it('test divide with a 0 denominator', function() {
    expect(calculateNumber('DIVIDE', 4.4, 0.1)).to.equal('Error');
  });
});
