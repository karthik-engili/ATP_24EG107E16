//create mini express app (seperate route)
import exp from 'express'
export const userApp = exp.Router()

// test data will replace it after with database
let users=[]


//create  API  (REST API - special api ) - REpresentational State Transfer

    // Route to handle GET req of Client (http://localhost:3000/users)
    userApp.get('/users',(req,res)=>{
        // send all users & send res
        res.json({message:"all the users",payload:users});
        
    })

    // route to get a user if found using id else send message not found
    userApp.get('/users/:id',(req,res)=>{
        // get id of user from url parameter
        let idOfUrl=Number(req.params.id)  // {id:5}
        // find user
        let user=users.find(userObj=>userObj.id==idOfUrl)
        // id user not found
        if(user==undefined){
            return res.json({message:"User not found"})
        }
        // send response as user object
        res.json({message:"a user",payload:user});
        
    })

    // Route to handle POST req of Client
    userApp.post('/users',(req,res)=>{
        // get user from client
        const newUser=req.body
        //push user into users
        users.push(newUser)
        //send response
        res.json({message:"User created"})
        
    })
    // Route to handle PUT req of Client
    userApp.put('/users',(req,res)=>{
        // get modified user from client
        let modifiedUser=req.body;
        // get index of existing user in users array
        let index=users.findIndex(userObj=>userObj.id==modifiedUser.id)
        // id user not found
        if(index==-1){
            return res.json({message:"User not found"})
        }
        //update user with index
        users.splice(index,1,modifiedUser)
        // send response
        res.json({message:"User Updated"})   
    })

    // Route to handle DELETE req of Client
    userApp.delete('/users/:id',(req,res)=>{
        // get id of user from url parameter
        let idOfUrl=Number(req.params.id)  // {id:5}
        //
        let index=users.findIndex(userObj=>userObj.id==idOfUrl)
        // id user not found
        if(index==-1){
            return res.json({message:"User not found to delete"})
        }
        // delete user by indez
        users.splice(index,1)
        //send res
        res.json({message:"User removed"})

        
    })
