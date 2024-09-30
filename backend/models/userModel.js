import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},

    cart:[
        {
            bookId:String,
            bookName:String,
            bookQuantity:Number,
            bookPrice:Number,
            bookImage:String,
        }
    ],

    order:[
        {
           totalAmount:Number,
           orderStatus:{type: String, default: "order Processing" },
           deliveryDate:{type:String,default: "20/12/2024"} 
        }
    ]
},{minimize:false})

const userModel=mongoose.models.BookStoreUser||mongoose.model("BookStoreUser",userSchema)

export default userModel;