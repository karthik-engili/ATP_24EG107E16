//create min-express app (seperate route)
import exp from 'express'
import {userModel} from '../models/userModel.js'
import { hash,compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { verifyToken } from '../middlewares/verifyToken.js';
const {sign} = jwt   //destructuring
export const userApp = exp.Router()

//Define user rest api routes

//user login
userApp.post('/auth',async(req,res)=>{
    //get user cred obj from client
    const {email,password}=req.body;
    //verify email
    let user = await userModel.findOne({email:email})
    if(!user){    // if email not exits
        return res.status(404).json({message:"Invalid email"})
    }
    // compare passwords
    let result = await compare(password,user.password)
    //if password not matched
    if(!result){
        return res.status(400).json({message:"Incorrect Password"})
    }
    
    // if passwords are matched
    //create token (jsonwebtoken or jwt or jaat)
    const signedToken=sign({email:user.email},"abcdef",{expiresIn:360})
    // before sending res of token , store token in httpOnly cookie
    res.cookie("token",signedToken,{
        httpOnly:true, 
        sameSite:"lax", 
        secure:false  
    })
    //send token in res
    res.status(200).json({message:"login success",payload:user})
})

// create a new user
userApp.post("/users",async(req,res)=>{
    //get new user obj from req
    const newUser=req.body;
    //hash the password
    const hashedPassword = await hash(newUser.password,10)
    //replace plain password with hashed password
    newUser.password=hashedPassword;
    //create new user doncument
    const newUserDocument = new userModel(newUser)
    // save
    const result = await newUserDocument.save()
    console.log("result: ",result)
    //send response
    res.status(201).json({message: "User Created"});
});

//Read all users
userApp.get("/users",verifyToken,async(req,res)=>{
    // read all users from db
    let userList = await userModel.find()
    //send res
    res.status(200).json({message: "users",payload:userList})
})

// Read a user by object id change this by email id 
userApp.get("/user", verifyToken,async(req,res)=>{
    // read user email from req query
    const emailOfUser = req.user?.email;
                                            // read obj id from req params
                                            //const uid = req.params.id
    //find user by email
    const userObj = await userModel.findById({email:emailOfUser}).populate("cart.product") // findById(uid) returns null if resource not found
    // if user not found 
    if(!userObj){
        return res.status(404).json({message:"User not found"})
    }
    //send res
    res.status(200).json({message:"user",payload:userObj})
})

//update user by id 
userApp.put("/users/:id",async(req,res)=>{
    //find modified user from req
    const modifiedUser=req.body;
    const uid=req.params.id;
    // find user by id and upate
    const updatedUser = await userModel.findByIdAndUpdate(
        uid,
        {$set: {...modifiedUser}},
        {new : true,runValidators:true}
    );
    // send resp
    res.status(200).json({message:"user Modified",payload:updatedUser})
});

// find user by id and delete 
userApp.delete("/users/:id",async(req,res)=>{
    //find modified user from req
    const uid=req.params.id;
    // find user by id and delete
    let deletedUser=await userModel.findByIdAndDelete(uid);
    if(!deletedUser){
        return res.status(404).json({message:"user not found"})
    }
    // send resp
    res.status(200).json({message:"user Deleted",payload:deletedUser})
});

//

// add product to cart
userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
    //get product id from url param
    let productId=req.params.pid;
    // get current user details
    const emailOfUser=req.user?.email

    // Before add, first it should check that product is already in the cart 
    // If the product is there, then increment count by 1
    // otherwise add that product to cart
    
    
    //add product to cart 
    let result = await userModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}})
    //if user invalid
    if(!result){
        return res.status(404).json({message:"user not found"})
    }
    res.status(200).json({message:"product added to cart"})
})