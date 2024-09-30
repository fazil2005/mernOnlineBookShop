import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    productName:{type:String,required:true},
    productImage:{type:String,required:true},
    productDescription:{type:String,required:true},
    productPrice:{type:Number,required:true}
})

const productModel=mongoose.models.books||mongoose.model("books",productSchema)

export default productModel