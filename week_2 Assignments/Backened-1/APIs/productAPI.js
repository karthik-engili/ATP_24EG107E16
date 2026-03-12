// Create product  API with below operations
    // Create a new product ({productId,name,brand,price})
    // Read all products
    // Read all product by brand
    // Update a product 
    // Delete a product by id
    
//create mini express app (seperate route)
import exp from 'express'
export const productApp = exp.Router()

// to store data after testing 
let products = []


// Route to handle GET req of Client (http://localhost:3000/products)
    productApp.get('/products',(req,res)=>{
        // send all products & send response
        res.json({message:"All available products are",payload:products});
        
    })

// Route to handle POST req of Client
    productApp.post('/products',(req,res)=>{
        // get product from client
        const newProduct=req.body
        //push product into users
        products.push(newProduct)
        //send response
        res.json({message:"New Product added "})
        
    })

// Route to handle PUT req of Client
    productApp.put('/products',(req,res)=>{
        // get modified product from client
        let modifiedProduct=req.body;
        // get index of existing product in products array
        let index=products.findIndex(productObj=>productObj.id==modifiedProduct.id)
        // if product not found
        if(index==-1){
            return res.json({message:"Product not found"})
        }
        //update product with index
        products.splice(index,1,modifiedProduct)
        // send response
        res.json({message:"Product Updated"})   
    })

// Route to handle DELETE req of Client
    productApp.delete('/products/:productId',(req,res)=>{
        // get id of user from url parameter
        let idOfUrl=Number(req.params.productId)  // {id:5}
        //
        let index=products.findIndex(productObj=>productObj.productId==idOfUrl)
        // if product not found
        if(index==-1){
            return res.json({message:"Product not found to delete"})
        }
        // delete product by index
        products.splice(index,1)
        //send res
        res.json({message:"Product removed"})

        
    })



