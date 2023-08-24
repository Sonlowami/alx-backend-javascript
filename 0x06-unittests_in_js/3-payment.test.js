const sinon = require('sinon');
const chai = require('chai');
const Utils = require('./utils.js')
const sendPaymentRequestToApi = require('./3-payment.js');
const expect = chai.expect

describe('Test Suite for utils', function() {
    it('test calledwith', function() {
        const spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20)
        expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    })
});
