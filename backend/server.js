import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import userRouter from './routes/userRoute.js'
import adminRouter from './routes/adminRoute.js'
import orderRouter from './routes/orderRoute.js'

const app=express()
const PORT=process.env.PORT||7000


connectDB()
app.use(cors())
app.use(express.json())

app.use('/api/user',userRouter)
app.use('/api/admin',adminRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("API WORKING")
})


app.listen(PORT,()=>{
    console.log(`API WORKING ON PORT http://localhost:${PORT}`)
})

