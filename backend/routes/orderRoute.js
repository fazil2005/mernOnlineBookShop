import express from 'express'
import { confirmOrder, findOrderAndUpdate, viewAllOrders, viewUserOrder } from '../controllers/orderController.js'

const orderRouter=express.Router()

orderRouter.post('/checkout/:id',confirmOrder)
orderRouter.get('/viewOrder/:id',viewUserOrder)
orderRouter.get('/orders-admin',viewAllOrders)
orderRouter.put('/update-order/:id',findOrderAndUpdate)

export default orderRouter