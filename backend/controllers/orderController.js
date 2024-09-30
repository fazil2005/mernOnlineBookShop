import userModel from "../models/userModel.js";

const confirmOrder=async(req,res)=>{
    const {totalAmount} = req.body;
    const {id}=req.params

    try {

        const isUser=await userModel.findById(id);
        if(!isUser){
            return  res.json({success:true,message:"User not found!"})
        }

        isUser.order.push({
            totalAmount:totalAmount,
            orderStatus:"pending",
            deliveryDate:"pending",
        })

        isUser.cart=[]

        await isUser.save();

        return res.json({success:true,message:"Order Successfull!"})
        
    } catch (error) {
       return res.json({success:false,message:"OrderFailed!"})
    }

}


const viewUserOrder=async(req,res)=>{
    const {id} =req.params
    try {

        const isUser=await userModel.findById(id)

        if(!isUser){
            return res.json({success:false,message:"User not found!"})
        }

        res.json({success:true,data:isUser.order})



        
    } catch (error) {
        return res.json({success:false,message:"InternalError"})
    }
}

const viewAllOrders=async(req,res)=>{
    try {
        const isUser=await userModel.find({})
        const orders=isUser.flatMap(item=>item.order)
        res.json({success:true,data:orders})
    } catch (error) {
        res.json({success:false,message:internalError})
    }
}

const findOrderAndUpdate=async(req,res)=>{
    const {id}=req.params
    const {orderStatus,deliveryDate}=req.body;
    try {

        const user=await userModel.findOneAndUpdate(
            {'order._id':id},
            {
                $set:{
                    'order.$.orderStatus':orderStatus,
                    'order.$.deliveryDate':deliveryDate,
                }
            },{new:true}
        )

        if(!user){
            return  res.json({success:false,message:"User Not Found"})
          }
  
        return  res.json({success:true,data:user})
        
    } catch (error) {
        res.json({success:false,message:"User not found!"})
    }
}



export {confirmOrder,viewUserOrder,viewAllOrders,findOrderAndUpdate}