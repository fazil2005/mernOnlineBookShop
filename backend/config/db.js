import mongoose from "mongoose";

const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://sampleBackend:fazil2005@backendasample.yd6ha.mongodb.net/sampleBackend',).then(()=>{
        console.log("DB connected")
        console.log(mongoose.models)
    })
}

export default connectDB