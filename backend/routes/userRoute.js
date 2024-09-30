import express from 'express'
import { decreaseItemQuantity, increaseItemQuantity, updateUserCart, userLogin, userRegistration, viewUserCart } from '../controllers/userController.js'


const userRouter=express.Router()

userRouter.post('/registration',userRegistration)
userRouter.post('/login',userLogin)
userRouter.post('/update-cart',updateUserCart)
userRouter.get('/view-cart/:id',viewUserCart)
userRouter.post('/book-inc',increaseItemQuantity)
userRouter.post('/book-dec',decreaseItemQuantity)






export default userRouter