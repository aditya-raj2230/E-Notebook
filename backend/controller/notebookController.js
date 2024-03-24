const Notebook=require('../models/notebookModels')
const mongoose =require('mongoose')

// get all notebook
const getNotebook = async(req,res)=>{
    
    try{
        const notebook = await Notebook.find({}).sort({createdAt:-1})//rand last to first
        res.status(200).json(notebook)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}


// get single notebook

const getOneNotebook = async(req,res)=>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such note'})
    }
    const notebook = await Notebook.findById(id)


    if(!notebook){
        return res.status(404).json({error:'no such  notebook'})
    }
    return res.status(200).json(notebook)
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
    const {id}=req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such note'})
    }
    const notebook = await Notebook.findOneAndDelete({_id:id})
    if(!notebook){
        return res.status(404).json({error:'no such  notebook'})
    }
    return res.status(200).json(notebook)

}
//update
const updateNotebook = async(req,res)=>{
    const {id}=req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such note'})
    }
    const notebook = await Notebook.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!notebook){
        return res.status(404).json({error:'no such  notebook'})
    }
    return res.status(200).json(notebook)

}


module.exports={
    createNotebook,
    getNotebook,
    getOneNotebook,
    deleteNotebook,
    updateNotebook
}