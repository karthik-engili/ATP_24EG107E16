// create min-express app (seperate route)
import exp from 'express'
import {productModel} from '../models/productModel.js'

export const productApp = exp.Router();

//Define product rest api routes
    // a. Create product
    productApp.post("/products",async(req,res)=>{
        //get new product obj from req
        const newProduct=req.body;
        // hashing any field is not necessary in this contest

        // create new user doncument
        const newProductDocument = new productModel(newProduct);
        // save
        const result = await newProductDocument.save()
        console.log("result: ",result)
        //send response
        res.status(201).json({message: "Product Created"});
    });

// b. Read all products
productApp.get("/products",async(req,res)=>{
    // read all users from db
    let productList = await productModel.find()
    //send res
    res.status(200).json({message: "products",payload:productList})
})

// c. Read a product by productId
productApp.get("/products/:id",async(req,res)=>{
    // read obj id from req params
    const pid = req.params.id
    //find user by id
    const proObj = await productModel.findById(pid) // findById(pid) returns null if resource not found
    // if user not found 
    if(!proObj){
        return res.status(404).json({message:"product not found"})
    }
    //send res
    res.status(200).json({message:"product",payload:proObj})
})

// d. Update a product by productId
productApp.put("/products/:id",async(req,res)=>{
    //find modified user from req
    const modifiedProduct=req.body;
    const pid=req.params.id;
    // find user by id and upate
    const updatedProduct = await productModel.findByIdAndUpdate(
        pid,
        {$set: {...modifiedProduct}},
        {new : true,runValidators:true}
    );
    // send resp
    res.status(200).json({message:"Product Modified",payload:updatedProduct})
});

// e. Delete a product by productId
productApp.delete("/products/:id",async(req,res)=>{
    //find modified user from req
    const pid=req.params.id;
    // find user by id and delete
    let deletedProduct=await productModel.findByIdAndDelete(pid);
    if(!deletedProduct){
        return res.status(404).json({message:"Product not found"})
    }
    // send resp
    res.status(200).json({message:"Product Deleted",payload:deletedProduct})
});