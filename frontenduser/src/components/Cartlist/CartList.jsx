import React, { useEffect, useState } from 'react'
import './CartList.css'
import axios from '../../helper/axiosInterceptor'
import {FaPlus,FaMinus} from'react-icons/fa'
import {toast} from 'react-toastify'
const CartList = () => {

  const [cart,setCart]=useState([])
  const id=localStorage.getItem("id")
  

  const fetchCart=async()=>{
    const id=localStorage.getItem("id")
    const responce=await axios.get(`/api/user/view-cart/${id}`,)
    if(responce.data.success){
      setCart(responce.data.data)
    }else{
      console.log(responce.data.message)
    }
  }


  const getTotal=()=>{
    return cart.reduce((total,item)=>total+(item.bookPrice*item.bookQuantity),0)
  }

  const increaseBookQuantity=async(bookId)=>{
    const responce=await axios.post('/api/user/book-inc',{id:id,bookId:bookId})
    if(responce.data.success){
      fetchCart()
    }else{
      console.log(responce.data.message)
    }

  }

  const decreaseBookQuantity=async(bookId)=>{
    const responce=await axios.post('/api/user/book-dec',{id:id,bookId:bookId})
    if(responce.data.success){
      fetchCart()
    }else{
      console.log(responce.data.message)
    }

  }

 
  const checkout=async(totalAmount)=>{
    const responce=await axios.post(`/api/order/checkout/${id}`,{totalAmount:totalAmount})
   
    if(responce.data.success){
      toast.success(responce.data.message)
      fetchCart()
    }else{
      toast.error(responce.data.message)
    }
    
  }

  

  useEffect(()=>{
    fetchCart()
    
  },[])

  return (
    <div className="cart">
    {id ? (
      cart.length > 0 ? (
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          <div>
            {cart.map((item, key) => (
              <div key={key} className="cart-items-title cart-items-item">
                <img src={item.bookImage} alt={item.bookName} />
                <p>{item.bookName}</p>
                <p>
                  <FaMinus
                    style={{ marginRight: '10px', cursor: 'pointer' }}
                    onClick={() => decreaseBookQuantity(item.bookId)}
                    size={10}
                    color='palevioletred'
                    className="quantity-control"
                  />
                  {item.bookQuantity}
                  <FaPlus
                    style={{ marginLeft: '10px', cursor: 'pointer' }}
                    size={10}
                    onClick={() => increaseBookQuantity(item.bookId)}
                    color='palevioletred'
                    className="quantity-control"
                  />
                </p>
                <p>₹{(item.bookPrice * item.bookQuantity).toFixed(2)}</p>
                <p className="cross" onClick={() => removeBook(item.bookId)}>x</p>
              </div>
            ))}
            <hr />
          </div>
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Totals</h2>
              <div>
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>₹{getTotal().toFixed(2)}</b>
                </div>
              </div>
              <button onClick={() => checkout(getTotal())}>PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      ) : (
        <div>No items in your cart. Start adding books!</div>
      )
    ) : (
      <div>Please log in to see your cart.</div>
    )}
  </div>
  
  
  )
}

export default CartList
