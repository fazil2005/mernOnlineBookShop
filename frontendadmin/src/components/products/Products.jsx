import React, { useEffect, useState } from 'react'
import {FaTrash,FaEdit} from 'react-icons/fa'
import './Products.css'
import axios from '../../Helper/ProductHelper'
import { toast } from 'react-toastify'

const Products = () => {

    const [book,setBook]=useState([])
    const [edit,setEdit]=useState(false)
    const [editProducts,setEditProducts]=useState(null)

    const fetchBook=async()=>{
        const responce=await axios.get('/api/admin/viewBook')
        if(responce.data.success){
            setBook(responce.data.data)
        }else{
            console.log(responce.data.message)
        }
    }

    const toggleEdit=(items)=>{
        setEdit(!edit)
        setEditProducts(items)
       
    }

   
   
    
    

    useEffect(()=>{
        fetchBook()
       
    },[])

    const deleteProduct=async(id)=>{
        const responce=await axios.delete(`/api/admin/deleteBook/${id}`)
        if(responce.data.success){
            toast.success(responce.data.message)
            location.reload()
        }else{
            toast.error(responce.data.error)
        }
    }

    const updateProduct=async(id)=>{
        const responce=await axios.put(`/api/admin/updateproduct/${id}`,editProducts)
        if(responce.data.success){
            
            fetchBook()
           
        }else{
            console.log(responce.data.message)
        }
    }

    const handlechange=(e)=>{
        const {name,value}=e.target;
        setEditProducts(editProducts=>({...editProducts,[name]:value}))
    }



  return (
    <>
    <div className='products' id='products'>
        {book.map((item,key)=>(
        <div key={key} className="productslist">
            <img src={item.productImage} alt="" />
            <h1>{item.productName}</h1>
            <p>{item.productDescription}</p>
            <span>Price:₹{item.productPrice}</span>
            <div className="product-edit-delete">
                <button><FaEdit size={15} onClick={()=>toggleEdit(item)} color='green'/></button>
                <button><FaTrash size={15} onClick={()=>deleteProduct(item._id)} color='red'/></button>
            </div>
        </div>
        ))}
        
    </div>
    {edit?
    

        
   
    <div className="model">
        <form className="model-content" onClick={()=>updateProduct(editProducts._id)} >
            <h1>Edit Product</h1>
            <label>Name</label>
            <input type="text" onChange={handlechange} name='productName' value={editProducts.productName} />
            <label>ImageUrl</label>
            <input type="text" onChange={handlechange} name='productImage' value={editProducts.productImage} />
            <label>Description</label>
            <input type="text" onChange={handlechange} name='productDescription' value={editProducts.productDescription} />
            <label>Price</label>
            <input type="text" onChange={handlechange} name='productPrice' value={editProducts.productPrice}/>
            <button type='submit' >Edit</button>
        </form>
        <div className='cross'>
            <p onClick={toggleEdit}>x</p>
        </div>
    </div>
    :<>/</>}
    </>
  )
}

export default Products
