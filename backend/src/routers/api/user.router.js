const express = require('express');
const userRouter = express.Router();
const userModel = require('../../models/user.model')
const UserController = require('../../controller/user.controller');
const checkAuth = require('../../middleware/verification').checkToken;

userRouter.post("/login",  new UserController(userModel).login);
userRouter.get('/checkToken', checkAuth, new UserController(userModel).checkTokenValidity);



userRouter.get('/:_id', checkAuth, new UserController(userModel).getUser);

// UPDATE a user
userRouter.patch('/:_id', checkAuth, new UserController(userModel).updateUser);

module.exports = userRouter;
