const { string } = require('joi')
const mongoose = require('mongoose')

const Schema=mongoose.Schema
const notebookSchema =  new Schema({
    name:{
        type: String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('notebook',notebookSchema)

