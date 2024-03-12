const express = require('express')
const { Registration, Login } = require('../Controller/userController')
const userRouter = express.Router()

userRouter.post("/registration",Registration)
userRouter.post("/Login",Login)


module.exports = {userRouter}