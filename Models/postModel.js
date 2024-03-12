const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    body:{
        type:String,
        require:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userModel",
        require:true,
    },
},{timestamps:true})

const postModel = new mongoose.model("postmodel",postSchema)
module.exports = {postModel}