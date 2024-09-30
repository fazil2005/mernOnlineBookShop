import React, { useEffect, useState } from 'react'
import './OrderList.css'
import axios from '../../helper/axiosInterceptor'
const OrderList = () => {

  const id=localStorage.getItem("id")
  const [order,setOrder]=useState([])

  const fetchOrder=async()=>{
    const responce=await axios.get(`/api/order/viewOrder/${id}`)
    if(responce.data.success){
      setOrder(responce.data.data)
    }else{
      console.log('InternalError')
    }
  }
  console.log(order)
 

  useEffect(()=>{
    fetchOrder()
  },[])

  return (
    <div className='orderlist'>
    
    {id ? ( // Check if the user is logged in
      <>
        <div className="cartlistProductsHeading">
          <p>Price</p>
          <p>Status</p>
          <p>Expected Date</p>
        </div>
        <hr />
        {order.length > 0 ? (
          order.map((item, key) => (
            <div key={key} className="cartlistproducts">
              <p>₹{item.totalAmount.toFixed(2)}</p>
              <p>{item.orderStatus}</p>
              <p>{item.deliveryDate}</p>
            </div>
          ))
        ) : (
          <div>No orders found.</div> // Message for no orders
        )}
      </>
    ) : (
      <div>Please log in to see your orders.</div> // Message for not logged in
    )}
  </div>
  )
}

export default OrderList
