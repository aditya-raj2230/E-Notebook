const express= require('express')


// controller funcitons
const {signupUser,loginUser}=require('../controller/userController')
const { sign } = require('jsonwebtoken')

const router=express.Router()

//login route
router.post('/login',loginUser)


//signup route

router.post('/signup',signupUser)

module.exports=router;