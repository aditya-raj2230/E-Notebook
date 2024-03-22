const { string } = require('joi')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator');

const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type:String,
        requird:true,
        unique:true
    },
    password:{
        type:String,
        requird:true,
    },
    lastName:{
        type:String,
        requird:true,
    },
    firstName:{
        type:String,
        requird:true,
    },
})

// static signup method
userSchema.statics.signup= async function(email,password,firstName,lastName){
    const exists=await this.findOne({email})

    // validation
    if((!email|| !password)||(!firstName ||!lastName)){
        throw Error('all fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error("email is not valid")
    }
    if(!validator.isStrongPassword(password)){
        throw Error("password is weak")
    }
    if(exists){
        throw Error("email already in use")
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const user = await this.create({email,password:hash,firstName,lastName})
    
    return user
}

module.exports= mongoose.model('User',userSchema)