require('dotenv').config();
const express = require('express')
const cors = require('cors');

const app = express();
const userRoutes = require('./routes/userroute');
const { default: mongoose } = require('mongoose');



//middleware
app.use(express.json());
app.use(cors());

const port=process.env.PORT||8080

app.use('/api/user',userRoutes)

mongoose.connect(process.env.DB)
.then(()=>{
    app.listen(port,()=>{console.log(`listening on port ${port}`)})
})
.catch((error)=>console.log(error))
