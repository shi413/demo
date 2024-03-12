const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    comment:{
        type:String,
        require:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userModel",
        require:true,
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"postModel",
        require:true,
    },
},{timestamps:true})

const commentModel = new mongoose.model("commentModel",commentSchema)
module.exports = {commentModel}