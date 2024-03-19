const mongoose=require('mongoose');

module.exports=()=>{
    const connectionParams = {
        useNewUrlParser:true,
        useUnifiedToplog:true,
    };
    try{
        mongoose.connect(process.env.DB)
        console.log("connecte to database successfully")
    }catch(error){
        console.log(error);
        console.log("couldn't connect to db")
    }
}