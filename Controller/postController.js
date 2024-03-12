const { postModel } = require("../Models/postModel")



let createpost = async(req,res)=>{
    let post = await postModel.create(req.body)
    res.status(201).send({success:true,message:"Post Created",data:post})
}

module.exports = {createpost}