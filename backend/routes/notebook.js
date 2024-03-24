const express = require('express')
const {createNotebook,getNotebook,getOneNotebook, updateNotebook, deleteNotebook}=require('../controller/notebookController')


const router = express.Router()

//get all notebook
router.get('/',getNotebook)
// get single notebook

router.get('/:id',getOneNotebook)

// post a new notebook
router.post('/',createNotebook)
// delete a workout

router.delete('/:id',deleteNotebook)

//update a workout
router.patch('/:id',updateNotebook)




module.exports = router