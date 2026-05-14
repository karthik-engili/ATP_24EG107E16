import { Schema,model } from "mongoose";
//Design of product schema 
const productSchema = new Schema(
    {
        // a.productId (required)
        productId:{
            type: Number,
            required: [true,"Product Id is required"],
            unique: [true,"Product already exits with given productId"]
        },
        // b.productName(required)
        productName:{
            type: String,
            required: [true,"Product Name required"]
        },
        // c.price(required, min price 10000 and max price 50000)
        price:{
            type: Number,
            required: [true,"price required"],
            min:[10000,"Price must be >10000"],
            max:[50000,"Price must be <50000"]
        },
        // d.brand(required)
        brand:{
            type:String,
            required:[true,"Brand is required"]
        }
    },
    {
        versionKey:false,    //
        timestamps:true,     //
    },
);


//generate userModel and export
export const productModel = model("product",productSchema)