const Utils = require('./utils.js');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    console.log(`The score is ${
        Utils.calculateNumber('SUM', totalAmount, totalShipping)
    }`);
}

module.exports = sendPaymentRequestToApi;
