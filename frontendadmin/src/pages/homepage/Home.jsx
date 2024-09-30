import React from 'react'
import Header from '../../components/header/Header'
import Proheading from '../../components/productheading/Proheading'
import Products from '../../components/products/Products'

const Home = () => {
  return (
    <div className='home'>
      <Header/>
     <Proheading/>
     <Products/>
    </div>
  )
}

export default Home
