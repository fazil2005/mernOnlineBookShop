import React, { useState } from 'react'
import './AddProduct.css'
import {FaCamera} from'react-icons/fa'
import axios from '../../Helper/ProductHelper'
import 'react-toastify'
import { toast } from 'react-toastify'

const AddProduct = () => {

  const [productData,setProductData]=useState({
    productName:"",
    productImage:"",
    productDescription:"",
    productPrice:""
  })

  const onChangeHandler=(e)=>{
    const {name,value}=e.target;
    setProductData((productData)=>({...productData,[name]:value}))
  }

  console.log(productData)

  const onSubmit=async(e)=>{
    e.preventDefault()
    const responce=await axios.post('/api/admin/addBook',productData);
    if(responce.data.success){
      toast.success(responce.data.message)
      resetInputField()
    }else{
      toast.success(responce.data.message)
    }
  }

  const resetInputField=()=>{
    setProductData({
      productName:"",
      productImage:"",
     productDescription:"",
     productPrice:""
    })
  }


  return (
    <div className='addproduct'>
        <h1>Add Products<FaCamera className='camera-icon' /></h1>
        <form className="addproductfields" onSubmit={onSubmit} >
            <input type="text" onChange={onChangeHandler} name='productName' value={productData.productName} placeholder='BookName' />
            <input type="url"  onChange={onChangeHandler} name='productImage' value={productData.productImage} placeholder='BookImageUrl' />
            <input type="text" maxLength={160} onChange={onChangeHandler} name='productDescription' value={productData.productDescription} placeholder='AboutBook'/>
            <input type='number'  onChange={onChangeHandler} name='productPrice' value={productData.productPrice} placeholder='BookPrice'/>
            
           
            <button type='submit'>Add</button>
        </form>
      
    </div>
  )
}

export default AddProduct
