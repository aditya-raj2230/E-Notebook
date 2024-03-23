const express = require('express')
const {createNotebook,getNotebook}=require('../controller/notebookController')


const router = express.Router()

//get all notebook
router.get('/',getNotebook)
// get single notebook

router.get('/:id',(req,res)=>{
    res.json({mssg:"get a single notebook"})
})

// post a new notebook
router.post('/',createNotebook)
// delete a workout

router.delete('/:id',(req,res)=>{
    res.json({mssg:"deleted a new workout"})
})

//update a workout
router.patch('/:id',(req,res)=>{
    res.json({mssg:"post a new workout"})
})




module.exports = router