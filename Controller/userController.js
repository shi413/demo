const { default: isEmail } = require("validator/lib/isEmail")
const { userModel } = require("../Models/userModel")
const {comparepassword, hasspass} = require("../bcrypt")
const validator = require('validator')



let Registration = async(req,res)=>{
    let {email} = req.body
    if(!validator.isEmail(email)){return res.send({success:false,message:"Email Validation Failed"})}
    let user = await userModel.findOne({email:req.body.email})
    if(user){
        return res.status(409).send({success:false,message:'Email already exist'})
    }
    let hasspassword = await hasspass(req.body.password)
    let newuser = await userModel.create({...req.body,password:hasspassword}) 
    res.status(201).send({success:true,message:'Registered Successfully',data:newuser})
}

let Login = async(req,res)=>{
    let {email,password} = req.body;
    let user = await userModel.findOne({email:email})
    if(!user){return res.send({success:false,message:"User Not Exist"})}
    const matchedPassword = await comparepassword(password,user.password)
    if(!matchedPassword){return res.status(409).send({success:false,message:'Wrong Password'})}
    res.send({success:true,message:"Login Successfully",data:user})
}

module.exports = {Registration,Login}