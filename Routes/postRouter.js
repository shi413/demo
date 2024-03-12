const express = require('express')
const { createpost } = require('../Controller/postController')
const postRouter = express.Router()

postRouter.post("/createpost",createpost)

module.exports = {postRouter}