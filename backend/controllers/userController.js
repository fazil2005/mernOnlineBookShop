import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

const userRegistration=async(req,res)=>{
    const {name,email,password}=req.body;
    try {

        if(!name||!email||!password){
            return res.json({success:false,message:"All fields are Required!"})
        }

        const isUserExists=await userModel.findOne({email:email})

        if(isUserExists){
            return res.json({success:false,message:"User already exists!"})
        }

        if(password.length<4){
            return res.json({success:false,message:"Password cannot be less than 4 characters"})
        }

        const genSalt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,genSalt);

        const newUserRegistration=new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const responce = await newUserRegistration.save()

        return res.json({success:true,message:"Registration Success!!",data:responce})
        
    } catch (error) {
        return res.json({success:false,message:"Internal Error"})
    }
}

const userLogin=async(req,res)=>{

    const {email,password}=req.body

    try {

        if(!email||!password){
            return res.json({success:false,message:"All fields are Required!"})
        }

        const isUserExists=await userModel.findOne({email:email})

        if(!isUserExists){
            return res.json({success:false,message:"User not found!"})
        }

        const comparedPassword=await bcrypt.compare(password,isUserExists.password)

        if(comparedPassword){
            const token= await jwt.sign({userID:isUserExists._id},"fazil2005",{expiresIn:"2d"})
            return res.json({success:true,message:"Loginsuccess",token:token,id:isUserExists._id,name:isUserExists.name})   
        }else{
            return res.json({ success: false, message: "Invalid credentials" });
        }
        



    } catch (error) {
        return res.json({success:false,message:"Internal Error!"})
    }

}

const updateUserCart=async(req,res)=>{
    const {id,bookId,bookName,bookQuantity,bookPrice,bookImage}=req.body
        
        

    try {

        const isUser=await userModel.findById(id)

        if(!isUser){
          return  res.json({success:false,message:"User not exits!"})
        }

        let itemExist=false;

        isUser.cart.forEach((item)=>{
            if(item.bookId===bookId){
                item.bookQuantity+=bookQuantity
                itemExist=true
            }
        })

        if(!itemExist){
            isUser.cart.push({bookId,bookName,bookQuantity,bookPrice,bookImage})
        }

        const responce=await isUser.save()

       return res.json({success:true,message:"cart updated!",data:responce})
        
    } catch (error) {
       return res.json({success:false,message:"Internal Error"})
    }
}

const viewUserCart=async(req,res)=>{
    const {id}=req.params

    try {
        const isUser=await userModel.findById(id);
        if(!isUser){
          return  res.json({success:false,message:"User not found!!"})
        }
       return res.json({success:true,data:isUser.cart})
    } catch (error) {
       return res.json({success:false,message:"Internal error"})
    }
}

const increaseItemQuantity=async(req,res)=>{
    const {id,bookId}=req.body;
    try {
        const isUser=await userModel.findById(id);
        if(!isUser){
          return  res.json({success:false,message:"User Not Found"})
        }

        const userCart=await isUser.cart.find(item=>item.bookId===bookId)

        if(!userCart){
            return res.json({success:false,message:"Item not Found"})
        }

        userCart.bookQuantity+=1

        await isUser.save()

        return res.json({success:true,message:"Cart Quantity Increased!",data:isUser})

    } catch (error) {

        return res.json({success:true,message:"InternalError"})
        
    }
}

const decreaseItemQuantity=async(req,res)=>{
    const {id,bookId}=req.body

    try {

        const isUser=await userModel.findById(id);

        if(!isUser){
            return  res.json({success:false,message:"User Not Found"})
        }

        const userCart=isUser.cart.find(item=>item.bookId===bookId)

        if(!userCart){
            return res.json({success:false,message:"Item not Found"})
        }

        userCart.bookQuantity-=1

        if(userCart.bookQuantity<=0){
            isUser.cart = isUser.cart.filter(item => item.bookId !== bookId);
        }

        await isUser.save()

        return res.json({success:true,message:"Cart Quantity Decreased!",data:isUser})

        
    } catch (error) {
        return res.json({success:true,message:"InternalError"})
    }

}


export {userRegistration,userLogin,updateUserCart,viewUserCart,increaseItemQuantity,decreaseItemQuantity}