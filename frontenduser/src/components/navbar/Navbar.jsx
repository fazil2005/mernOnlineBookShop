import React, { useState } from 'react'
import './Navbar.css'
import {FaBars} from 'react-icons/fa'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const [menu,setMenu]=useState("Home")
    const [visiblity,showVisblity]=useState(true)
    const navigate=useNavigate()

    const toggleMenu=()=>{
        showVisblity(!visiblity)
    }

    const id=localStorage.getItem("id")

    const onLogout=async()=>{
      localStorage.removeItem("id")
      localStorage.removeItem("name")
      localStorage.removeItem("token")
      navigate('/login')
    }


  return (
    <div className='navbar'>
        <div className="navbarleft">
            <img src="https://www.shutterstock.com/image-vector/hand-keep-book-read-source-600nw-1127076767.jpg" alt="" />
            <FaBars className='fabar' onClick={toggleMenu} size={50}/>
        </div>
        <div className="navbar-center">
            <ul className={`link-tags ${visiblity?'active':''} `}>
             <Link to={'/'}><li onClick={()=>{setMenu("Home");showVisblity(false)}}>Home {menu==="Home"?<hr/>:<></>} </li></Link> 
            <Link to={'/book'}> <li onClick={()=>{setMenu("Books");showVisblity(false)}}>Books {menu==="Books"?<hr/>:<></>}</li></Link>
             <Link to={'/cart'}><li onClick={()=>{setMenu("Cart");showVisblity(false)}}>Cart {menu==="Cart"?<hr/>:<></>}</li></Link>
             <Link to={'/order'}>  <li onClick={()=>{setMenu("Orders");showVisblity(false)}}>Orders {menu==="Orders"?<hr/>:<></>}</li></Link> 
            </ul>
        </div>
        <div className="loginbutton">
              <Link to={'/login'}> {id?<button onClick={onLogout}>Logout</button>:<button>Login</button>}</Link> 
            </div>
     
    </div>
  )
}

export default Navbar
