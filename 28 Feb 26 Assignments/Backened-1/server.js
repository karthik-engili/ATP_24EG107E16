// Create HTTP server
import express from "express";

const app = express();

// import APIs
import { userApp } from "./APIs/UserAPI.js";
import { productApp } from "./APIs/ProductAPI.js";

// body parser middleware (inbuilt)
app.use(express.json());   // converts JSON into JavaScript object

// custom middleware 1
function middleware1(req, res, next) {
    console.log("middleware1 executed");
    next();
}

// custom middleware 2
function middleware2(req, res, next) {
    console.log("middleware2 executed");
    next();
}

// register middlewares
app.use(middleware1);
app.use(middleware2);

// routes
app.use("/user-api", userApp);
app.use("/product-api", productApp);

// set port
const port = 3000;

// start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});




























// // Create HTTP server
// import exp from 'express'
// const app=exp()

// import {userApp} from './APIs/UserAPI';
// import {productApp } from './APIs/ProductAPI';

// // use body parser middleware (in-built)
// app.use(exp.json())   // converts json into java script

// function middleware1(req,res,next){
//     //send res from middleware
//     //res.json({message:"this is res of middleware1"})

//     console.log("middleware1 executed")
//     //forward req to next
//     next();
// }

// function middleware2(req,res,next){
//     //send res from middleware
//     //res.json({message:"this is res of middleware2"})
//     console.log("middleware2 executed")
//     //forward req to next
//     next();
// }


// app.use(middleware1)
// app.use(middleware2)

// app.use('user-api',userApp);

// app.use('/product-api',productApp);

// // set a port number
// const port=3000

// // to assign port number to HTTP server
// app.listen(port, ()=> console.log(`server listening port ${port} ...`))

