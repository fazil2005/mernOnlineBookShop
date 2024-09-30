import React from 'react'
import './Product.css'
import { useState } from 'react'
import axios from '../../helper/axiosInterceptor'
import { useEffect } from 'react'
import{toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const Product = () => {

    const [books,setBooks]=useState([]);
    const id=localStorage.getItem("id")
    const navigate=useNavigate()

    const fetchBooks=async()=>{
        const responce=await axios.get('/api/admin/viewBook')
        if(responce.data.success){
            setBooks(responce.data.data)
        }else{
            console.log("Internal Error")
        }
    }
  console.log(books)
    useEffect(()=>{
        fetchBooks()
    },[])


    const addToCart=async(itemId,itemName,itemImage,itemPrice)=>{
      if(!id){
        toast.error("Login To BuyItems!")
        navigate('/login')
        
      }
      
      const responce=await axios.post('/api/user/update-cart',{
        id:id,
        bookId:itemId,
        bookName:itemName,
        bookQuantity:1,
        bookPrice:itemPrice,
        bookImage:itemImage
      })
      if(responce.data.success){
        toast.success(responce.data.message)
      }


    }




  return (
    <div className='product'>
        {books.map((item,key)=>(

       
        <div className="productbox" key={key}>
            <img src={item.productImage} alt="" />
            <h1>{item.productName} </h1>
            <h3>{item.productDescription}</h3>
           <p>₹{item.productPrice}</p>
           <button onClick={()=>addToCart(item._id,item.productName,item.productImage,item.productPrice)}>Add to cart</button>
        </div>
       
    ))}
       
    </div>
  )
}

export default Product
