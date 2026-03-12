//create express app
import exp from "express";
import {connect} from 'mongoose';
import { userApp } from "./APIs/userAPI.js";
import { productApp } from "./APIs/productAPI.js";
import cookieParser from "cookie-parser";
import {config} from 'dotenv'

config(); 

const app = exp();

// add body parser to , 
app.use(exp.json())
// add cookie parser middleware
app.use(cookieParser())
//forward req to path if path starts with /user-api
app.use("/user-api",userApp)
app.use("/product-api",productApp)

//connect to DB server
// old style : connect().then().catch()
// modern style
async function connectDB() {
    try{
        await connect("process.env.DB_URL");
        console.log("DB connection success");
        //start server ---->becoz after connecction of db it should start
        const port = process.env.PORT || 4000
        app.listen(port,()=>console.log("server on port 4000..."))   
    }catch(err) {
        console.log("err in DB connection",err);
    }
}

connectDB();

// to get error in json format not 
// error handling middleware , executes only when error is occured
app.use((err,req,res,next)=>{
    // Validation error
    if(err.name=='ValidationError'){
        console.log("middleware 1 executed")
        return res.status(400).json({message:"error oucured",error:err.message})
    }
    //CastError
    if(err.name=='CastError'){
        return res.status(400).json({message:"error oucured",error:err.message})
    }
    console.log(err)

    return res.status(500).json({
        message:"Server error",
        error:"Internal server error"
    })
});
