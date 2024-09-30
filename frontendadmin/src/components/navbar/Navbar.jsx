import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {FaBars,FaPlus} from 'react-icons/fa'
import './Navbar.css'
const Navbar = () => {

  const [menu,setMenu]=useState("Home")
  const [visiblity,showVisblity]=useState(true)

  const toggleMenu=()=>{
      showVisblity(!visiblity)
  }


  return (
    <div>
      <div className='navbar'>
    <div className="navbarleft">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/009/636/683/small_2x/admin-3d-illustration-icon-png.png" alt="" />
        <FaBars className='fabar' onClick={toggleMenu} size={50}/>
    </div>
     <div className="navbar-center">
        <ul className={`link-tags ${visiblity?'active':''} `}>
         <Link to={'/'}><li onClick={()=>{setMenu("Home");showVisblity(false)}}>Home {menu==="Home"?<hr/>:<></>} </li></Link> 
        <Link to={'/all-orders'}> <li onClick={()=>{setMenu("Products");showVisblity(false)}}>All Orders {menu==="Products"?<hr/>:<></>}</li></Link>
         
        </ul>
    </div>
    <div className="loginbutton">
          <Link to={'/add-product'}> <button><FaPlus color='green'/>Add Product</button></Link> 
        </div>
 
</div>
    </div>
  )
}

export default Navbar
