import React, { useEffect, useState } from 'react'
import {FaUser,FaShoppingBag,FaCamera} from 'react-icons/fa'
import './Header.css'
import axios from '../../Helper/ProductHelper'

const Header = () => {
    const [users,setUsers]=useState(0)
    const [orders,setOrders]=useState(0)
    const [products,setProducts]=useState(0)
    const [profit,setProfit]=useState(0)

    const fetchUserLength=async()=>{
        const responce=await axios.get('/api/admin/admin-userlist')
        if(responce.data.success){
            setUsers(responce.data.data)
        }else{
            console.log(responce.data.message)
        }
    }

    const fetchOrderLength=async()=>{
        const responce=await axios.get('/api/admin/admin-orderlist')
        if(responce.data.success){
            setOrders(responce.data.data)
        }else{
            console.log(responce.data.message)
        }
    }

    const fetchProductsLength=async()=>{
        const responce=await axios.get('/api/admin/admin-productlist')
        if(responce.data.success){
            setProducts(responce.data.data)
        }else{
            console.log(responce.data.message)
        }
    }

    const fetchAdminProfit=async()=>{
        const responce=await axios.get('/api/admin/admin-revenue')
        if(responce.data.success){
            setProfit(responce.data.data)
        }else{
            console.log(responce.data.message)
        }
    }


 

    useEffect(()=>{
        fetchUserLength()
        fetchOrderLength()
        fetchProductsLength()
        fetchAdminProfit()
    },[])


  return (
    <div className='header'>
        <div className="headerleft">
            <div className="box1">
                <FaUser size={40} color='Darkviolet'/>
                <h2>Users</h2>
                <p>{users}</p>
                <span>Increase by 20%</span>
            </div>
            <div className="box2">
                <FaShoppingBag color='orangered' size={40}/>
                <h2>Orders</h2>
                <p>{orders}</p>
                <span>Increase by 10%</span>
            </div>
            <div className="box3">
                <FaCamera size={40} color='darkblue'/>
                <h2>Products</h2>
                <p>{products}</p>
                <span>Increase by 10%</span>
            </div>
        </div>
        <div className="headerright">
            <div className="headrrightbox">
                <h4>₹{profit}</h4>
                <h1>Total revenue</h1>
                <div className="revenue">
                <p style={{color:'Darkviolet'}}>+40% <span>Growth</span></p>
                <p style={{color:'orangered'}}>2.5%  <span>Refund</span></p>
                <p style={{color:'darkblue'}}>+23% <span>Online</span></p>
                </div>                
               
                <h5>These figures represent our revenue performance over the last quarter. The growth indicates a significant increase in sales, while the refund percentage shows the proportion of total sales that were returned. The online revenue indicates the share of total revenue generated through online sales channels.</h5>
            </div>
            
        </div>

    </div>
    
  )
}

export default Header
