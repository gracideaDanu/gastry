const User = require('../models/user');

const braintree = require('braintree');

require('dotenv').config();


// BRAINTREE_MERCHANT_ID=dfj5vrfcpkm4jsfg
// BRAINTREE_PUBLIC_KEY=3f4dkw85yqc9hw6t
// BRAINTREE_PRIVATE_KEY=b80e72a76de676d32293dc7f05f9402a

const gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: process.env.BRAINTREE_MERCHANT_ID,
    publicKey: process.env.BRAINTREE_PUBLIC_KEY,
    privateKey: process.env.BRAINTREE_PRIVATE_KEY

})

 
exports.generateToken = (req, res, next) => {
    gateway.clientToken.generate({}, function(err, response) {
        if(err) {
            res.status(500).send(err)
        } else {
            res.send(response)
        }
    })
}

exports.processPayment = (req, res, next) => {
let nonceFromTheClient = req.body.paymentMethodNonce;

let amountFromTheClient = req.body.amount

//charge user

let newTransaction = gateway.transaction.sale(
    {
        amount: amountFromTheClient,
        paymentMethodNonce: nonceFromTheClient,
        options: {
            submitForSettlement: true
    }
}, 
    (error, result) => {
        if(error) {
            res.status(500).json(error.message)
        } else {
            res.json(result)
        }
})
}

