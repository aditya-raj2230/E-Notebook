require('dotenv').config();
const express = require('express')
const cors = require('cors');

const app = express();
const userRoutes = require('./routes/userroute');
const { default: mongoose } = require('mongoose');

const notebookRoutes = require('./routes/notebook')



//middleware
app.use(express.json());
app.use(cors());

app.use((req,res,next)=>{
    console.log(req.path)
    next()
})

const port=process.env.PORT||8080

app.use('/api/user',userRoutes)
app.use('/api/notebook',notebookRoutes)

mongoose.connect(process.env.DB)
.then(()=>{
    app.listen(port,()=>{console.log(`listening on port ${port}`)})
})
.catch((error)=>console.log(error))
