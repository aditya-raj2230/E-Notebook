const User = require('../models/userModel')
//login user
const loginUser=async(req,res)=>{
    res.json({mssg:'login user'})
}

//signup user
const signupUser=async(req,res)=>{
    const {email,password,firstName,lastName}=req.body
    try{
        const user = await User.signup(email,password,firstName,lastName)

        res.status(200).json({email,firstName,lastName,user})
    }
    catch(error){
        res.status(400).json({Error:error.message})
    }

}
 
module.exports={signupUser,loginUser}