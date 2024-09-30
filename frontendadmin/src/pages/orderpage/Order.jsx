import React, { useEffect, useState } from 'react';
import './Order.css';
import axios from'../../Helper/ProductHelper'

const Order = () => {

  const [order,setOrder]=useState([])


  const fetchCart=async()=>{

    const responce=await axios.get('/api/order/orders-admin')
    if(responce.data.success){
      setOrder(responce.data.data)
    }else{
      console.log(responce.data.message)
    }
  }

  const updateOrder=async(e,itemId)=>{
    e.preventDefault()
    const form=e.target;
    const orderStatus=form.orderStatus.value;
    const deliveryDate=form.deliveryDate.value;

    const responce=await axios.put(`/api/order/update-order/${itemId}`,{orderStatus:orderStatus,deliveryDate:deliveryDate})

    if(responce.data.success){
      fetchCart()
    }else{
      console.log(responce.data.message)
    }


  }
  



  useEffect(()=>{
    fetchCart()
  },[])




  return (
    <div className='orderlist'>
      <div className="cartlistProductsHeading">
        <p>Order ID</p>
        <p>Total Amount</p>
        <p>Order Status</p>
        <p>Expected Date</p>
        <p>Confirm</p>
      </div>
      <hr />
      {order.map((item,key)=>(

     
      <form className="cartlistproducts" key={key} onSubmit={(e)=>updateOrder(e,item._id)}>
        <p>{item._id}</p>
        <p>₹{item.totalAmount}</p>
        <select defaultValue={item.orderStatus} name='orderStatus'>
          <option value="pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Out of Delivery">Out of Delivery</option>
          <option value="Delivered">Deilvered</option>
        </select>
        <input type="text" name='deliveryDate' defaultValue={item.deliveryDate} /> {/* Replace with actual date */}
        <button type='Submit'>Confirm</button>
      </form>
       ))}
    </div>
  );
}

export default Order;
