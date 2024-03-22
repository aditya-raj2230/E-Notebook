const User = require('../models/userModel')
const jwt = require('jsonwebtoken');
require('dotenv').config();



const createToken = (_id)=>{
   return jwt.sign({_id},process.env.JWT_TOKEN,{expiresIn: '3d'})
}

//login user
const loginUser=async(req,res)=>{
    const {email,password}= req.body
    try{
        const user = await User.login(email,password)
 
        // create a jwt token

        const token=createToken(user._id)

        res.status(200).json({email,token})
    }
    catch(error){
        res.status(400).json({Error:error.message})
    }
}

//signup user
const signupUser=async(req,res)=>{
    const {email,password,firstName,lastName}=req.body
    try{
        const user = await User.signup(email,password,firstName,lastName)

        // create a jwt token

        const token=createToken(user._id)

        res.status(200).json({email,firstName,lastName,token})
    }
    catch(error){
        res.status(400).json({Error:error.message})
    }

}
 
module.exports={signupUser,loginUser}