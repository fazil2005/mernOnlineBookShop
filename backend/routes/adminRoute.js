import express from 'express';
import { addBook, adminRevenue, deleteBook, productsLength, updateProducts, userLength, userOrderLength, viewBook } from '../controllers/adminController.js';

const adminRouter=express.Router();

adminRouter.post('/addBook',addBook);
adminRouter.get('/viewBook',viewBook);
adminRouter.delete('/deleteBook/:id',deleteBook);
adminRouter.get('/admin-userlist',userLength);
adminRouter.get('/admin-orderlist',userOrderLength);
adminRouter.get('/admin-productlist',productsLength);
adminRouter.put('/updateproduct/:id',updateProducts);
adminRouter.get('/admin-revenue',adminRevenue);


export default adminRouter