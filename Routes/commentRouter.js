const express = require('express')
const { commentcreate } = require('../Controller/commentController')
const commentRouter = express.Router()

commentRouter.post("/createcomment/:id",commentcreate)

module.exports = {commentRouter}