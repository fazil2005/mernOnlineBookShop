import React from 'react'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Homepage/Home';
import Privacy from './components/PrivacyPolicy/Privacy';
import Book from './pages/bookpage/Book';
import Cart from './pages/Cartpage/Cart';
import Order from './pages/orderpage/Order';
import Login from './pages/loginpage/Login';



const App = () => {
  return (
    <>
    <ToastContainer/>
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Privacy/>
    </div>
    </>
  )
}

export default App
