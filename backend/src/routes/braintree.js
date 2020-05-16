const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

const authController = require('../controllers/auth');
const braintreeController = require('../controllers/braintree');

router.get('/braintree/getToken/:userId', authController.requireSignin, authController.isAuth, braintreeController.generateToken );

router.post('/braintree/payment/:userId', authController.requireSignin, authController.isAuth, braintreeController.processPayment );

router.param('userId', userController.userById);

module.exports = router;