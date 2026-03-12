import { Schema,model,Types } from "mongoose";

// create cart schema {product,count}
const cartSchema = new Schema({
    product:{
        type: Types.ObjectId ,     //_id (object id)
        ref: "product"   //name of the prodcut model
    },
    count:{
        type:Number,
        default:1 
    }
})

//create uesr schema 
const userSchema = new Schema(
    {
        username:{
            type: String,
            required: [true,"Username is required"],
            minLength: [4,"Min length of Username is 4 chars"],
            maxLength: [6,"size exceeded 6 chars"]
        },
        password:{
            type: String,
            required: [true,"Password required"]
        },
        email:{
            type: String,
            required: [true,"email required"],
            unique: [true,"email already exists"]
        },
        age:{
            type:Number
        },
        cart:[cartSchema]
    },
    {
        versionKey:false,
        timestamps:true,
    },
);


//generate userModel
export const userModel = model("user",userSchema)
