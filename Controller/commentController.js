const { commentModel } = require("../Models/commentModel")



let commentcreate = async(req,res)=>{
    let comment = await commentModel.create(req.body)
    res.status(201).send({success:true,message:"Comment Created",data:comment})
}

module.exports = {commentcreate}