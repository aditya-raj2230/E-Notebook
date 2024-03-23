const Notebook=require('../models/notebookModels')
const mongoose =require('mongoose')

// get all notebook
const getNotebook = async(req,res)=>{
    
    try{
        const notebook = await Notebook.find().sort({createdAt:-1})//rand last to first
        res.status(200).json(notebook)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}


// get single notebook

const getOneNotebook = async(req,res)=>{
    const {id} = req.body
    try{
        const notebook = await Notebook.findById(id)
        res.status(200).json(notebook)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}
//create new notebook
const createNotebook = async (req,res)=>{
    const {name}=req.body
    try{
        const notebook = await Notebook.create({name})
        res.status(200).json(notebook)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}


// delete new notebook
const deleteNotebook = async(req,res)=>{
    const {id}=req.body
    try{
        const notebook = await Notebook.findOneAndDelete({id})
        res.status(200).json(notebook)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

// update  notebook

const updateNotebook = async(req,res)=>{
    const {id} =req.body
    try{
        const notebook = await Notebook.patch({name})
        res.status(200).json(notebook)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports={
    createNotebook,
    getNotebook,
    getOneNotebook,
    deleteNotebook,
    updateNotebook
}