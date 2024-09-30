import productModel from "../models/adminModel.js";
import userModel from '../models/userModel.js'

const addBook=async(req,res)=>{

    const {productName,productImage,productDescription,productPrice}=req.body;

    if(!productName||!productImage||!productDescription||!productPrice){
        return res.json({success:false,message:"All Fields are Required!"})
    }

    try {

        const newBook=new productModel({
            productName,productImage,productDescription,productPrice
        })

        await newBook.save()
       return res.json({success:true,message:"Book Added",data:newBook})
        
    } catch (error) {
       return res.json({success:false,message:"Internal Error"})
    }

}

const viewBook=async(req,res)=>{
    try {
        const fetchBook=await productModel.find({})
        res.json({success:true,data:fetchBook})
    } catch (error) {
        res.json({success:false,message:"InternalError"})
    }
}

const deleteBook=async(req,res)=>{
    const {id}=req.params;
    try {
        const responce=await productModel.findByIdAndDelete(id);
        res.json({success:true,message:"BookDeleted"})
    } catch (error) {
        res.json({success:false,message:"InternalError"})
    }
}

const userLength=async(req,res)=>{
    try {
        const user=await userModel.find({})
        res.json({success:true,data:user.length})
    } catch (error) {
        res.json({success:false,message:'InternalError'})
    }
}

const userOrderLength=async(req,res)=>{
    try {
        const user=await userModel.find({})
        const cartUser=user.flatMap(item=>item.order)

        res.json({success:true,data:cartUser.length})
    } catch (error) {
        res.json({success:false,message:"InternalError"})
    }
}

const productsLength=async(req,res)=>{
    try {
        const products=await productModel.find({})
        res.json({success:true,data:products.length})
    } catch (error) {
        res.json({success:false,message:"InternalError"})
    }
}

const updateProducts=async(req,res)=>{
    const {id}=req.params;
    const allUpdatedProductDetails=req.body
    try {
        const updateProducts=await productModel.findByIdAndUpdate(id,allUpdatedProductDetails,{new:true})
       return res.json({success:true,data:updateProducts})
    } catch (error) {
       return res.json({success:false,message:"InternalError"})
    }

}


const adminRevenue=async(req,res)=>{
    try {
        const usersOrders=await userModel.find({})
        const Orders=usersOrders.flatMap(item=>item.order)
        const totalRevenue=Orders.reduce((total,item)=>total+item.totalAmount,0)
        res.json({success:true,data:totalRevenue})
    } catch (error) {
        res.json({success:false,message:"InvalidError"})
    }
}






export {addBook,viewBook,deleteBook,userLength,userOrderLength,productsLength,updateProducts,adminRevenue}