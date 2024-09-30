import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/homepage/Home';
import Navbar from './components/navbar/Navbar';
import AddProduct from './pages/addproduct/AddProduct';
import Order from './pages/orderpage/order';
import UserPage from './pages/userpage/UserPage';




const App = () => {
  return (
    <>
    <ToastContainer/>
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>
        <Route path='/all-orders' element={<Order/>}/>
      
      </Routes>
    </div>
    </>
  )
}

export default App
