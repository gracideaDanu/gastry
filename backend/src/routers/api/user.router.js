const express = require('express');
const userRouter = express.Router();
const userModel = require('../../models/user.model')
const UserController = require('../../controller/user.controller');

userRouter.post("/login",  new UserController(userModel).login);

module.exports = userRouter;