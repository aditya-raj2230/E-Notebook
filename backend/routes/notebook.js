const express = require('express')
const {createNotebook,getNotebook,getOneNotebook, updateNotebook, deleteNotebook}=require('../controller/notebookController')

const requireAuth = require('../middlewares/requireAuth') 

const router = express.Router()
//require auth for user
router.use(requireAuth)

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